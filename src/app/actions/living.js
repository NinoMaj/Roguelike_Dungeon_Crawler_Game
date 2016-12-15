/* eslint linebreak-style: ["error", "windows"] */
export const cellLife = cells => {
  let neighboursCount = 0;
  // const tempCells = Object.assign({}, cells);
  const tempCells = JSON.parse(JSON.stringify(cells));
  const sqrOfLength = Math.sqrt(Object.keys(tempCells).length);
  function checkUpLeft(i) {
    if (cells[i - sqrOfLength - 1].cellStatus === 1 || cells[i - sqrOfLength - 1].cellStatus === 2) {
      neighboursCount++;
      // console.log('UL');
    }
  }
  function checkUp(i) {
    if (cells[i - sqrOfLength].cellStatus === 1 || cells[i - sqrOfLength].cellStatus === 2) {
      neighboursCount++;
      // console.log('U');
    }
  }
  function checkUpRight(i) {
    if (cells[i - sqrOfLength + 1].cellStatus === 1 || cells[i - sqrOfLength + 1].cellStatus === 2) {
      neighboursCount++;
      // console.log('UR');
    }
  }
  function checkLeft(i) {
    if (cells[i - 1].cellStatus === 1 || cells[i - 1].cellStatus === 2) {
      neighboursCount++;
      // console.log('L');
    }
  }
  function checkRight(i) {
    if (cells[i + 1].cellStatus === 1 || cells[i + 1].cellStatus === 2) {
      neighboursCount++;
      // console.log('R');
    }
  }
  function checkDownLeft(i) {
    if (cells[i + sqrOfLength - 1].cellStatus === 1 || cells[i + sqrOfLength - 1].cellStatus === 2) {
      neighboursCount++;
      // console.log('DL');
    }
  }
  function checkDown(i) {
    if (cells[i + sqrOfLength].cellStatus === 1 || cells[i + sqrOfLength].cellStatus === 2) {
      neighboursCount++;
      // console.log('D');
    }
  }
  function checkDownRight(i) {
    if (cells[i + sqrOfLength + 1].cellStatus === 1 || cells[i + sqrOfLength + 1].cellStatus === 2) {
      neighboursCount++;
      // console.log('DR');
    }
  }

  for (let i = 1; i <= Object.keys(tempCells).length; i++) {
    // const cellNext = (i === Object.keys(tempCells).length) ? tempCells[1] : tempCells[i + 1];
    neighboursCount = 0;
    // console.log('i', i);
    // console.log('cells[i]', cells[i]);
    if (i === 1) { // is it first
      checkRight(i);
      checkDown(i);
      checkDownRight(i);
    } else if (i < sqrOfLength) { // is it top row
      checkLeft(i);
      checkRight(i);
      checkDownLeft(i);
      checkDown(i);
      checkDownRight(i);
    } else if (i === sqrOfLength) { // is it last in top row
      checkLeft(i);
      checkDownLeft(i);
      checkDown(i);
    } else if (i - (sqrOfLength * sqrOfLength - (sqrOfLength - 1)) === 0) { // is ti bottom left
      checkUp(i);
      checkUpRight(i);
      checkRight(i);
    } else if (i === sqrOfLength * sqrOfLength) { // is it bottom right
      checkUpLeft(i);
      checkUp(i);
      checkLeft(i);
    } else if ((i - 1) % sqrOfLength === 0) { // is ti left
      checkUp(i);
      checkUpRight(i);
      checkRight(i);
      checkDown(i);
      checkDownRight(i);
    } else if (i % sqrOfLength === 0) { // is it right
      checkUpLeft(i);
      checkUp(i);
      checkLeft(i);
      checkDownLeft(i);
      checkDown(i);
    } else if (i > sqrOfLength * sqrOfLength - sqrOfLength) { // is it bottom
      checkUpLeft(i);
      checkUp(i);
      checkUpRight(i);
      checkLeft(i);
      checkRight(i);
    } else { // everything else
      checkUpLeft(i);
      checkUp(i);
      checkUpRight(i);
      checkLeft(i);
      checkRight(i);
      checkDownLeft(i);
      checkDown(i);
      checkDownRight(i);
    }
    // console.log('neighboursCount', neighboursCount);
    if (neighboursCount < 2) {
      tempCells[i].cellStatus = 0;
    } else if (neighboursCount === 2) {
      if (tempCells[i].cellStatus === 0) {
        tempCells[i].cellStatus = 0;
      } else if (tempCells[i].cellStatus === 1 || tempCells[i].cellStatus === 2) {
        tempCells[i].cellStatus = 2;
      }
    } else if (neighboursCount === 3) {
      if (tempCells[i].cellStatus === 0) {
        tempCells[i].cellStatus = 1;
      } else if (tempCells[i].cellStatus === 1 || tempCells[i].cellStatus === 2) {
        tempCells[i].cellStatus = 2;
      }
    } else {
      tempCells[i].cellStatus = 0;
    }
  }

  // for (const key in tempCells) {
  //   if (tempCells.hasOwnProperty(key)) {
  //     const tempKey = key + 1;
  //     console.log('tempKey', tempKey);
  //     console.log('tempCells[key + 1]', tempCells[tempKey]);
  //     const cellNext = (key + 1 === Object.keys(tempCells).length) ? tempCells[1] : tempCells[key + 1];
  //     console.log('cellNext', cellNext);
  //     if (tempCells[key].cellStatus === 1 && cellNext.cellStatus === 2) {
  //       tempCells[key].cellStatus = 2;
  //     }
  //   }
  // }
  // Object.keys(cells).map(key => {
  //   console.log('key', key);
  //   const cell = cells[key];
  //   const keyNext = key + 1;
  //   console.log('cells[keyNext]', cells[keyNext]);
  //   const cellNext = (cells[keyNext] === Object.keys(cells).length) ? cells[1] : cells[keyNext];
  //   console.log('cells[keyNext]', cells[keyNext]);
  //   console.log('cellNext', cellNext);
  //   if (cell.cellStatus === 1 && cellNext.cellStatus === 2) {
  //     cell.cellStatus = 2;
  //   }
  //   return true;
  // });
  // for (let i = 0; i < cells.length - 1; i++) {
    // console.log('cells[i].cellNumber', cells[i].cellNumber);
    // console.log('cells[i].cellStatus', cells[i].cellStatus);
    // if (cells[i].cellNumber === i + 1) {
    //   if (cells[i].cellStatus === 1 && cells[i + 1].cellStatus === 2) {
    //     cells[i].cellStatus = 2;
    //   }
    //   if (cells[i].cellStatus === 1 && cells[i + 1].cellStatus === 0) {
    //     cells[i].cellStatus = 2;
    //   }
    //   if (cells[i].cellStatus === 0 && cells[i + 1].cellStatus === 1) {
    //     cells[i].cellStatus = 2;
    //   }
    //   if (cells[i].cellStatus === 0 && cells[i + 1].cellStatus === 2) {
    //     cells[i].cellStatus = 2;
    //   }
    // }

    // console.log('cells.cellNumber[i + 1]', cells.cellNumber[i + 1]);
  // }
  return {
    type: 'CELL_LIFE',
    payload: tempCells
  };
};
