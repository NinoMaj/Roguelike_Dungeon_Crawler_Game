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

// console.log('users:', users);
// console.log('activeUser:', activeUser);
// console.log('cells:', cells);

const allReducers = combineReducers({
  cells,
  boardSizeState
  /*
  users,
  activeUser
  */
});

// console.log('allReducer', allReducers);

export default allReducers;
