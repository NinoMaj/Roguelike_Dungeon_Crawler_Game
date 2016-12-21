/* eslint linebreak-style: ["error", "windows"] */
export default function (state = {diff: 1, darkness: true}, action) {
  switch (action.type) {
    case 'DIFF_CHANGE':
      // console.log('action.payload', action.payload[1]);
      return Object.assign({}, state, action.payload);
    case 'DARKNESS_CHANGED':
      // console.log('action.payload', action.payload[1]);
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
