/* eslint linebreak-style: ["error", "windows"] */
export const boardSize = (boardSize = 50) => {
  // console.log('boardsize in action creator', boardSize);
  return {
    type: 'BOARD_SIZE',
    payload: boardSize
  };
};
