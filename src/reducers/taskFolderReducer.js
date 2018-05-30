import { FETCH_TASKFOLDER_REQUEST, FETCH_TASKFOLDER_SUCCESS, FETCH_TASKFOLDER_ERROR } from '../actions/task-folders';

const initialState = {
  taskFolder: [],
  loading: false,
  error: null
};

const taskFolderReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TASKFOLDER_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_TASKFOLDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        taskFolder: action.taskFolder
      }

    case FETCH_TASKFOLDER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state;
  }
}

export default taskFolderReducer;