import { FETCH_TANK_REQUEST, FETCH_TANK_SUCCESS, FETCH_TANK_ERROR, SHOW_CREATE_TANK_WINDOW, HIDE_CREATE_TANK_WINDOW, SHOW_UPDATE_TANK_WINDOW, HIDE_UPDATE_TANK_WINDOW, DELETE_TANK_SUCCESS } from "../actions/tank";

const initialState = {
  tank: [],
  loading: false,
  error: null,
  creatingTank: false,
  updatingTank: false
};

const tankReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TANK_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_TANK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        tank: action.tank
      }

    case FETCH_TANK_ERROR:
      return {
        ...state,
        error: action.error
      }

    case SHOW_CREATE_TANK_WINDOW:
      return {
        ...state,
        creatingTank: true
      }

    case HIDE_CREATE_TANK_WINDOW:
      return {
        ...state,
        creatingTank: false
      }

    case SHOW_UPDATE_TANK_WINDOW:
      return {
        ...state,
        updatingTank: true
      }

    case HIDE_UPDATE_TANK_WINDOW:
      return {
        ...state,
        updatingTank: false
      }

    case DELETE_TANK_SUCCESS:
      return {
        ...state,
        tank: state.tank.filter(tank => tank.id !== action.id)
      }

    default:
      return state
  }
}

export default tankReducer;