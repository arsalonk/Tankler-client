import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import taskFolderReducer from './taskFolderReducer';
import parametersReducer from './parametersReducer';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import databaseReducer from './databaseReducer';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  parameters: parametersReducer,
  taskFolderReducer,
  auth: authReducer,
  form: formReducer,
  database: databaseReducer
});

export default rootReducer;