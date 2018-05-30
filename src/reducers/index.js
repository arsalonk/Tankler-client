import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import taskFolderReducer from './taskFolderReducer';

const rootReducer = combineReducers({
  tasksReducer,
  taskFolderReducer
});

export default rootReducer;