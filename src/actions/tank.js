import { API_BASE_URL } from '../config';

export const FETCH_TANK_REQUEST = 'FETCH_TANK_REQUEST';
const fetchTankRequest = () => ({
  type: FETCH_TANK_REQUEST
});

export const FETCH_TANK_SUCCESS = 'FETCH_TANK_SUCCESS';
const fetchTankSuccess = tank => ({
  type: FETCH_TANK_SUCCESS,
  tank
});

export const FETCH_TANK_ERROR = 'FETCH_TANK_ERROR';
const fetchTankError = error => ({
  type: FETCH_TANK_ERROR,
  error
});

export const SHOW_CREATE_TANK_WINDOW = 'SHOW_CREATE_TANK_WINDOW';
export const showCreateTankWindow = () => ({
  type: SHOW_CREATE_TANK_WINDOW,
});

export const HIDE_CREATE_TANK_WINDOW = 'HIDE_CREATE_TANK_WINDOW';
export const hideCreateTankWindow = () => ({
  type: HIDE_CREATE_TANK_WINDOW
});

export const SHOW_UPDATE_TANK_WINDOW = 'SHOW_UPDATE_TANK_WINDOW';
export const showUpdateTankWindow = () => ({
  type: SHOW_UPDATE_TANK_WINDOW
});

export const HIDE_UPDATE_TANK_WINDOW = 'HIDE_UPDATE_TANK_WINDOW';
export const hideUpdateTankWindow = () => ({
  type: HIDE_UPDATE_TANK_WINDOW
});

export const DELETE_TANK_SUCCESS = 'DELETE_TANK_SUCCESS';
const deleteTankSuccess = (id) => ({
  type: DELETE_TANK_SUCCESS,
  id
})

export const fetchTank = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchTankRequest());
  fetch(`${API_BASE_URL}/api/tank`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(tank => dispatch(fetchTankSuccess(tank)))
    .catch(error => dispatch(fetchTankError(error)));
}

export const createTank = (length, width, height, volume) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/tank`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ length, width, height, volume })
  })
    .then(res => res.json())
    .then(() => dispatch(hideCreateTankWindow()))
    .then(() => dispatch(fetchTank()))
    .catch(error => dispatch(fetchTankError(error)))
};

export const updateTank = (length, width, height, volume, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/tank/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ length, width, height, volume })
  })
    .then(res => res.json())
    .then(dispatch(hideUpdateTankWindow()))
    .then(dispatch(fetchTank()))
    .catch(err => console.log(err))
};

export const deleteTank = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/tank/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(() => dispatch(deleteTankSuccess(id)))
    .catch(error => console.log(error))
}