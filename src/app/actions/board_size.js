/* eslint linebreak-style: ["error", "windows"] */
export const boardSize = boardSize => {
  // console.log('boardsize in action creator', boardSize);
  return {
    type: 'BOARD_SIZE',
    payload: boardSize
  };
};
