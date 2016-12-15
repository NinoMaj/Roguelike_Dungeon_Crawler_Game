/* eslint linebreak-style: ["error", "windows"] */
export const resetCells = (size = 50) => {
  // console.log('size', typeof size, size);
  const boardSize = Math.pow(size, 2);
  const boardObject = {};
  let j = 0;
  for (let i = 1; i <= boardSize; i++) {
    j = Math.floor(Math.random() * 3);
    boardObject[i] = {cellStatus: j};
  }
  return {
    type: 'CELLS_RESETED',
    payload: boardObject
  };
};
