import { API_BASE_URL } from '../config';

export const FETCH_PARAMETERS_REQUEST = 'FETCH_PARAMETERS_REQUEST';
const fetchParametersRequest = () => ({
  type: FETCH_PARAMETERS_REQUEST
});

export const FETCH_PARAMETERS_SUCCESS = 'FETCH_PARAMETERS_SUCCESS';
const fetchParametersSuccess = parameters => ({
  type: FETCH_PARAMETERS_SUCCESS,
  parameters
});

export const FETCH_PARAMETERS_ERROR = 'FETCH_PARAMETERS_ERROR';
const fetchParametersError = error => ({
  type: FETCH_PARAMETERS_ERROR,
  error
});

export const DELETE_PARAMETER_SUCCESS = 'DELETE_PARAMETER_SUCCESS';
const deleteParameterSuccess = id => ({
  type: DELETE_PARAMETER_SUCCESS,
  id
});

export const SHOW_CREATE_WINDOWP = 'SHOW_CREATE_WINDOWP';
export const showCreateWindowP = () => ({
  type: SHOW_CREATE_WINDOWP,
});

export const HIDE_CREATE_WINDOWP = 'HIDE_CREATE_WINDOWP';
export const hideCreateWindowP = () => ({
  type: HIDE_CREATE_WINDOWP
});

export const SHOW_UPDATE_WINDOW = 'SHOW_CREATE_WINDOW';
export const showUpdateWindow = () => ({
  type: SHOW_UPDATE_WINDOW,
});

export const HIDE_UPDATE_WINDOW = 'HIDE_CREATE_WINDOW';
export const hideUpdateWindow = () => ({
  type: HIDE_UPDATE_WINDOW
});

export const fetchParameters = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchParametersRequest());
  fetch(`${API_BASE_URL}/api/parameters`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(response => response.json())
    .then(parameters => dispatch(fetchParametersSuccess(parameters)))
    .catch(error => dispatch(fetchParametersError(error)));
};

export const createParameter = (stats, category) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/parameters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ stats, category })
  })
    .then(res => res.json())
    .then(() => dispatch(fetchParameters()))
}

export const updateParameter = (stats, category, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/parameters/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ stats, category })
  })
    .then(res => res.json())
    .then(dispatch(hideUpdateWindow()))
    .then(dispatch(fetchParameters()))
    .catch(err => console.log(err));
}

export const deleteParameter = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchParametersRequest());
  fetch(`${API_BASE_URL}/api/parameters/${id}`, {
    method: 'DELETE',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(() => dispatch(deleteParameterSuccess(id)))
    .catch(error => dispatch(fetchParametersError(error)));
};