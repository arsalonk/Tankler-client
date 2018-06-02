import { FETCH_DATABASE_REQUEST, FETCH_DATABASE_SUCCESS, FETCH_DATABASE_ERROR } from "../actions/database";

const initialState = {
  database: [],
  loading: false,
  error: null
};

const databaseReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATABASE_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_DATABASE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        database: action.database
      }

    case FETCH_DATABASE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    
    default:
      return state
  }
}

export default databaseReducer