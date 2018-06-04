import { FETCH_LIVESTOCK_REQUEST, FETCH_LIVESTOCK_SUCCESS, FETCH_LIVESTOCK_ERROR, SHOW_ADDING_WINDOW, HIDE_ADDING_WINDOW, DELETE_LIVESTOCK_SUCCESS } from "../actions/livestock";

const initialState = {
  livestock: [],
  loading: false,
  error: null,
  adding: false
};

const livestockReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_LIVESTOCK_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_LIVESTOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        livestock: action.livestock
      }

    case FETCH_LIVESTOCK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case SHOW_ADDING_WINDOW:
      return {
        ...state,
        adding: true
      }
    
    case HIDE_ADDING_WINDOW:
      return {
        ...state,
        adding: false
      }

    case DELETE_LIVESTOCK_SUCCESS:
      return {
        ...state,
        loading: false,
        livestock: state.livestock.filter(livestock => livestock.id !== action.id)
      }

    default:
      return state
  }
}

export default livestockReducer;