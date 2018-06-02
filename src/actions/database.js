import { API_BASE_URL } from '../config';

export const FETCH_DATABASE_REQUEST = 'FETCH_DATABASE_REQUEST';
const fetchDatabaseRequest = () => ({
  type: FETCH_DATABASE_REQUEST
});

export const FETCH_DATABASE_SUCCESS = 'FETCH_DATABASE_SUCCESS';
const fetchDatabaseSuccess = database => ({
  type: FETCH_DATABASE_SUCCESS,
  database
});

export const FETCH_DATABASE_ERROR = 'FETCH_DATABASE_ERROR';
const fetchDatabaseError = error => ({
  type: FETCH_DATABASE_ERROR,
  error
});

export const fetchDatabase = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchDatabaseRequest());
  fetch(`${API_BASE_URL}/api/database`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(database => dispatch(fetchDatabaseSuccess(database)))
    .catch(error => dispatch(fetchDatabaseError(error)))
};