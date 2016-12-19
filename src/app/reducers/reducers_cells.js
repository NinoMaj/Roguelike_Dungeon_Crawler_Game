/* eslint linebreak-style: ["error", "windows"] */

/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function (state = {}, action) {
  switch (action.type) {
    case 'CELLS_RESETED':
      // console.log('cells reseted action.payload', action.payload);
      return Object.assign({}, action.payload[0]);
    case 'CELL_SELECTED':
      // console.log('cells selected action.payload', action.payload);
      return Object.assign({}, action.payload);
    case 'ITEMS_CHANGED':
      // console.log('items changed action.payload[0]', action.payload[0]);
      return Object.assign({}, action.payload[0]);
    default:
      return state;
  }
}

