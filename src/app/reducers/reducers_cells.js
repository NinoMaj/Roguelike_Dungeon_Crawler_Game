/* eslint linebreak-style: ["error", "windows"] */

/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function (state = {}, action) {
  switch (action.type) {
    case 'CELLS_RESETED':
      return Object.assign({}, action.payload);
    case 'CELL_SELECTED':
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

