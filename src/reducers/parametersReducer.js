import { FETCH_PARAMETERS_REQUEST, FETCH_PARAMETERS_SUCCESS, FETCH_PARAMETERS_ERROR, DELETE_PARAMETER_SUCCESS } from '../actions/parameters';

const initialState = {
  parameters: [],
  loading: false,
  error: null
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