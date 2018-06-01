import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, DELETE_TASK_SUCCESS, SHOW_CREATE_WINDOW, HIDE_CREATE_WINDOW } from '../actions/tasks';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  creating: false
};

const tasksReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TASKS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        tasks: action.tasks
      }

    case FETCH_TASKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case SHOW_CREATE_WINDOW: 
      return {
        ...state,
        creating: true
      }

    case HIDE_CREATE_WINDOW:
      return {
        ...state,
        creating: false
      }

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter(task => task.id !== action.id)
      }

    default:
      return state
  }
}

export default tasksReducer;