import { FETCH_FISH_REQUEST, FETCH_FISH_SUCCESS, FETCH_FISH_ERROR } from '../actions/filler';

const initialState = {
  fish: [],
  loading: false,
  error: null
};

const fishReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_FISH_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_FISH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        fish: action.fish
      }

    case FETCH_FISH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state;
  }
}

export default fishReducer;