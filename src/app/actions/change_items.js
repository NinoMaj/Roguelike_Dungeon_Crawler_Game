/* eslint linebreak-style: ["error", "windows"] */
export const changeItems = (cells, items, event) => {
  function levelUpCheck() {
    if (items.player.Xp >= 100) {
      items.player.Xp -= 100;
      items.player.level++;
    }
  }
  function perkTaken(position) {
    Object.keys(items.perks).map(key => {
      if (items.perks[key].position === position) {
        switch (items.perks[key].id) {
          case 1:
            items.player.health += 50;
            items.message.last = 'Health +50';
            console.log('Health +50');
            break;
          case 2:
            items.player.health += 100;
            items.message.last = 'Health +100';
            console.log('Health +100');
            break;
          case 3:
            items.player.Xp += 50;
            levelUpCheck();
            items.message.last = 'XP +50';
            console.log('XP +50');
            break;
          case 4:
            items.player.Xp += 100;
            levelUpCheck();
            items.message.last = 'XP +100';
            console.log('XP +100');
            break;
          case 5:
            items.player.weapon = 'sword';
            items.message.last = 'Sword found';
            console.log('Sword taken');
            break;
          default:
            console.log('default');
        }
        return true;
      }
      return false;
    });
  }

  function fightEnemy(position) {
    Object.keys(items.enemy).map(key => {
      let hit;
      if (items.enemy[key].position === position) {
        hit = (Math.floor(Math.random() * 30) + 20) * items.player.level;
        switch (items.player.weapon) {
          case 'stick':
            hit *= 1;
            break;
          case 'sword':
            hit *= 2;
            break;
          default:
            return false;
        }
        console.log('hit to enemy', hit);
        items.message.last = `${hit} hits to the enemy`;
        items.enemy[key].health -= hit;
        console.log('enemy health left:', items.enemy[key].health);
        if (items.enemy[key].health > 0) {
          hit = (Math.floor(Math.random() * 10) + 1) * items.enemy[key].level;
          console.log('hit to player:', hit);
          items.player.health -= hit;
        } else {
          items.player.Xp += items.enemy[key].level * 20;
          levelUpCheck();
          delete items.enemy[key];
          cells[position].cellStatus = 1;
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
      } else if (cells[items.player.position - 50].cellStatus === 3 || cells[items.player.position - 50].cellStatus === 5) {
        fightEnemy(items.player.position - 50);
        break;
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
      } else if (cells[items.player.position + 50].cellStatus === 3 || cells[items.player.position + 50].cellStatus === 5) {
        fightEnemy(items.player.position + 50);
        break;
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
      } else if (cells[items.player.position - 1].cellStatus === 3 || cells[items.player.position - 1].cellStatus === 5) {
        fightEnemy(items.player.position - 1);
        break;
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
      } else if (cells[items.player.position + 1].cellStatus === 3 || cells[items.player.position + 1].cellStatus === 5) {
        fightEnemy(items.player.position + 1);
        break;
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
