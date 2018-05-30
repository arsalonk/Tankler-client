import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR } from '../actions/tasks';

const initialState = {
  tasks: [],
  loading: false,
  error: null
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

    default:
      return state
  }
}

export default tasksReducer;