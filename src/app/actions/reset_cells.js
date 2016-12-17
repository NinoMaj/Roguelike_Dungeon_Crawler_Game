/* eslint linebreak-style: ["error", "windows"] */
export const resetCells = (size = 50) => {
  // console.log('size', typeof size, size);
  const boardSize = Math.pow(size, 2);
  const boardObject = {};
  const walls = [];
  const rooms = [];
  for (let i = 1; i <= 50; i++) {
    walls.push(i);
  }
  for (let i = 51; i <= 2500; i += 50) {
    walls.push(i);
  }
  for (let i = 100; i <= 2500; i += 50) {
    walls.push(i);
  }
  for (let i = 2451; i <= 2499; i++) {
    walls.push(i);
  }

  function room(id, width, height) {
    for (let j = id; j < id + (height * 50); j += 50) {
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

  for (let i = 1; i <= boardSize; i++) {
    if (rooms.includes(i) === true) {
      boardObject[i] = {cellStatus: 1};
    } else {
      boardObject[i] = {cellStatus: 2};
    }
  }
  return {
    type: 'CELLS_RESETED',
    payload: boardObject
  };
};
