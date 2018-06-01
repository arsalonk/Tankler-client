import { FETCH_PARAMETERS_REQUEST, FETCH_PARAMETERS_SUCCESS, FETCH_PARAMETERS_ERROR, DELETE_PARAMETER_SUCCESS, SHOW_CREATE_WINDOWP, HIDE_CREATE_WINDOWP, HIDE_UPDATE_WINDOW, SHOW_UPDATE_WINDOW } from '../actions/parameters';

const initialState = {
  parameters: [],
  loading: false,
  error: null,
  creatingP: false,
  updating: false
};

const parametersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PARAMETERS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_PARAMETERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        parameters: action.parameters
      }

    case FETCH_PARAMETERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case SHOW_CREATE_WINDOWP: 
      return {
        ...state,
        creatingP: true
      }

    case HIDE_CREATE_WINDOWP:
      return {
        ...state,
        creatingP: false
      }

    case SHOW_UPDATE_WINDOW:
      return {
        ...state,
        updating: true
      }

    case HIDE_UPDATE_WINDOW:
      return {
        ...state,
        updating: false
      }

    case DELETE_PARAMETER_SUCCESS:
      return {
        ...state,
        loading: false,
        parameters: state.parameters.filter(parameter => parameter.id !== action.id)
      }

    default:
      return state
  }
}

export default parametersReducer;