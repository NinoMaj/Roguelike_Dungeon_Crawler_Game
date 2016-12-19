/* eslint linebreak-style: ["error", "windows"] */
export const changeItems = (cells, items, event) => {
  function perkTaken(position) {
    Object.keys(items.perks).map(key => {
      if (items.perks[key].position === position) {
        switch (items.perks[key].id) {
          case 1:
            items.player.health += 50;
            console.log('health +50');
            break;
          case 2:
            items.player.health += 100;
            console.log('health +100');
            break;
          case 3:
            items.player.Xp += 50;
            if (items.player.Xp >= 100) {
              items.player.Xp -= 100;
              items.player.level++;
            }
            console.log('XP +50');
            break;
          case 4:
            items.player.Xp += 100;
            if (items.player.Xp >= 100) {
              console.log('Level up!');
              items.player.Xp -= 100;
              items.player.level++;
            }
            console.log('XP +100');
            break;
          case 5:
            items.player.weapon = 'sword';
            console.log('Sword taken');
            break;
          default:
            console.log('default');
        }
        console.log('Perk found: ', items.perks[key].id);
        return true;
      }
      return false;
    });
  }

  function fightEnemy(position) {
    console.log('position:', position);
    Object.keys(items.enemy).map(key => {
      let hit;
      console.log('items.enemy[key].position:', items.enemy[key].position);
      if (items.enemy[key].position === position) {
        switch (items.enemy[key].level) {
          case 1:
            hit = (Math.floor(Math.random() * 10) + 1) * 5;
            console.log('player health:', hit);
            items.player.health -= hit;
            break;
          case 2:
            hit = (Math.floor(Math.random() * 10) + 1) * 5;
            console.log('player health:', hit);
            items.player.health -= hit;
            break;
          case 3:
            hit = (Math.floor(Math.random() * 10) + 1) * 5;
            console.log('player health:', hit);
            items.player.health -= hit;
            break;
          case 4:
            hit = (Math.floor(Math.random() * 10) + 1) * 5;
            console.log('player health:', hit);
            items.player.health -= hit;
            break;
          case 5:
            hit = (Math.floor(Math.random() * 10) + 1) * 5;
            console.log('player health:', hit);
            items.player.health -= hit;
            break;
          default:
            console.log('default');
        }
        return true;
      }
      return false;
    });
  }

  switch (event) {
    case 'ArrowUp':
      if (cells[items.player.position - 50].cellStatus === 4) {
        perkTaken(items.player.position - 50);
      } else if (cells[items.player.position - 50].cellStatus === 3) {
        fightEnemy(items.player.position - 50);
      }
      if (cells[items.player.position - 50].cellStatus === 1 || cells[items.player.position - 50].cellStatus === 4) {
        cells[items.player.position].cellStatus = 1;
        cells[items.player.position - 50].cellStatus = 2;
        items.player.position -= 50;
      }
      break;
    case 'ArrowDown':
      if (cells[items.player.position + 50].cellStatus === 4) {
        perkTaken(items.player.position + 50);
      }
      if (cells[items.player.position + 50].cellStatus === 1 || cells[items.player.position + 50].cellStatus === 4) {
        cells[items.player.position].cellStatus = 1;
        cells[items.player.position + 50].cellStatus = 2;
        items.player.position += 50;
      }
      break;
    case 'ArrowLeft':
      if (cells[items.player.position - 1].cellStatus === 4) {
        perkTaken(items.player.position - 1);
      }
      if (cells[items.player.position - 1].cellStatus === 1 || cells[items.player.position - 1].cellStatus === 4) {
        cells[items.player.position].cellStatus = 1;
        cells[items.player.position - 1].cellStatus = 2;
        items.player.position -= 1;
      }
      break;
    case 'ArrowRight':
      if (cells[items.player.position + 1].cellStatus === 4) {
        perkTaken(items.player.position + 1);
      }
      if (cells[items.player.position + 1].cellStatus === 1 || cells[items.player.position + 1].cellStatus === 4) {
        cells[items.player.position].cellStatus = 1;
        cells[items.player.position + 1].cellStatus = 2;
        items.player.position += 1;
      }
      break;
    default:
      return false;
  }

  return {
    type: 'ITEMS_CHANGED',
    payload: [
      cells,
      items
    ]
  };
};
