/* eslint linebreak-style: ["error", "windows"] */
export default function (state = {}, action) {
  switch (action.type) {
    case 'CELLS_RESETED':
      // console.log('action.payload', action.payload[1]);
      return Object.assign({}, action.payload[1]);
    case 'ITEMS_CHANGED':
      return Object.assign({}, action.payload[1]);
    default:
      return state;
  }
}
