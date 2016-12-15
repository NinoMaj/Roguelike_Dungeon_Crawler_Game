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
      // console.log('state', state);
      // return Object.keys(state).map(key => {
      //   if (state[key] === action.payload) {
      //     return state[key];
      //     // return {cellStatus: 1};
      //   }
      //   return state[key];
      // });
      // Object.keys(state.cells).map(key => {
      //   console.log('key', key);
      //   if (key === tempKey) {
      //   }
      // }
  // });
      // return {
      //   for (const key in state.cells) {
      //     if (state.cells.hasOwnProperty(key)) {
      //     }
      //   }
      // }
      // return state
      //   .slice(0, action.payload.cellNumber - 1)
      //   .concat(action.payload)
      //   .concat(state.slice(action.payload.cellNumber));
    case 'CELL_LIFE':
      // console.log('je li doslo bar jednom', action.payload);
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

