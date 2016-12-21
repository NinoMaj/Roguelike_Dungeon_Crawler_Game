/* eslint linebreak-style: ["error", "windows"] */
export const resetCells = (size = 50, reason, options) => {
  // console.log('size', typeof size, size);
  // console.log('reason', reason);
  // const boardSize = Math.pow(size, 2);
  const boardSize = size * 30;
  const board = {};
  const player = {};
  const numberOfEnemies = 5;
  const enemy = {};
  const perks = {};
  const numberOfPerks = 5;
  const message = {
    last: reason
  };
  const rooms = [];
  // for (let i = 1; i <= 50; i++) {
  //   walls.push(i);
  // }
  // for (let i = 51; i <= 2500; i += 50) {
  //   walls.push(i);
  // }
  // for (let i = 100; i <= 2500; i += 50) {
  //   walls.push(i);
  // }
  // for (let i = 2451; i <= 2499; i++) {
  //   walls.push(i);
  // }

  function room(startCell, width, height) {
    for (let j = startCell; j < startCell + (height * 50); j += 50) {
      for (let i = j; i < j + width; i++) {
        rooms.push(i);
      }
    }
  }

  room(52, 7, 6);
  // hallway 1
  rooms.push(357);
  room(404, 7, 3);
  // hallway 2
  rooms.push(461, 462, 463);
  room(264, 7, 8);
  // hallway 3
  rooms.push(667, 717, 767, 817, 867, 917, 916, 915, 914, 918, 919, 920);
  room(807, 7, 6);
  room(871, 4, 4);
  room(1102, 6, 9);
  // hallway 4
  rooms.push(1408);
  room(1309, 7, 4);
  room(230, 8, 6);
  room(1042, 7, 4);
  room(1229, 5, 5);
  room(677, 14, 10);
  // hallway 5
  rooms.push(975, 976);
  // hallway 6
  rooms.push(1091);
  // hallway 7
  rooms.push(1181);
  // hallway 8
  rooms.push(533, 583, 633);

  for (let i = 1; i <= boardSize; i++) {
    if (rooms.includes(i) === true) {
      board[i] = {cellStatus: 1};
    } else {
      board[i] = {cellStatus: 0};
    }
  }

  function putPlayer() {
    player.position = Math.floor(Math.random() * boardSize) + 1;
    if (board[player.position].cellStatus === 1) {
      board[player.position].cellStatus = 2;
      player.weapon = 'stick';
      player.level = 1;
      player.health = player.level * 100 * options.diff;
      player.Xp = 0;
      return true;
    }
    putPlayer();
  }
  putPlayer();

  const putEnemies = id => {
    enemy[id] = {};
    enemy[id].position = Math.floor(Math.random() * boardSize) + 1;
    if (board[enemy[id].position].cellStatus === 1) {
      if (id === numberOfEnemies + 1) {
        board[enemy[id].position].cellStatus = 5;
        enemy[id].level = 6;
      } else {
        board[enemy[id].position].cellStatus = 3;
        enemy[id].level = Math.floor(Math.random() * 5) + 1;
      }
      enemy[id].health = enemy[id].level * 100;
      return true;
    }
    putEnemies(id);
  };

  for (let i = 0; i < numberOfEnemies; i++) {
    putEnemies(i);
  }

  putEnemies(numberOfEnemies + 1);

  const putPerks = id => {
    perks[id] = {};
    perks[id].position = Math.floor(Math.random() * boardSize) + 1;
    if (board[perks[id].position].cellStatus === 1) {
      board[perks[id].position].cellStatus = 4;
      perks[id].id = Math.floor(Math.random() * 5) + 1;
      switch (perks[id].id) {
        case 1:
          perks[id].name = 'health +50';
          break;
        case 2:
          perks[id].name = 'health +100';
          break;
        case 3:
          perks[id].name = 'XP +50';
          break;
        case 4:
          perks[id].name = 'XP +100';
          break;
        case 5:
          perks[id].name = 'sword';
          break;
        default:
          console.log('default');
      }
      return true;
    }
    putPerks(id);
  };

  for (let i = 0; i < numberOfPerks; i++) {
    putPerks(i);
  }

  const items = {
    player,
    enemy,
    perks,
    message
  };
  return {
    type: 'CELLS_RESETED',
    payload: [
      board,
      items,
      perks,
      message
    ]
  };
};
