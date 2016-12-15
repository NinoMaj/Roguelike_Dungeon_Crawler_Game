/* eslint linebreak-style: ["error", "windows"] */
export const selectCell = (cells, id) => {
  // console.log("You clicked on cell: ", id);
  cells[id] = {cellStatus: 1};
  return {
    type: 'CELL_SELECTED',
    payload: cells
  };
};
