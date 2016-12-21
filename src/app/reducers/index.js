/* eslint linebreak-style: ["error", "windows"] */
import {combineReducers} from 'redux';

import cells from './reducer_cells';
import boardSizeState from './reducer_board_size';
import items from './reducer_items';
import options from './reducer_options';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  cells,
  boardSizeState,
  items,
  options
});
// console.log('allReducers', allReducers);
// console.log('cells', cells);
// console.log('boardSizeState', boardSizeState);
export default allReducers;
