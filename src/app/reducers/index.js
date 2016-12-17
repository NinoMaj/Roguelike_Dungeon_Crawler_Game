/* eslint linebreak-style: ["error", "windows"] */
import {combineReducers} from 'redux';
// import users from './reducers_users';
import cells from './reducers_cells';
// import activeUser from './reducer_active_user';
import boardSizeState from './reducer_board_size';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  cells,
  boardSizeState
});

export default allReducers;
