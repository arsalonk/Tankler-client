import { API_BASE_URL } from '../config';

export const FETCH_LIVESTOCK_REQUEST = 'FETCH_LIVESTOCK_REQUEST';
const fetchLivestockRequest = () => ({
  type: FETCH_LIVESTOCK_REQUEST
});

export const FETCH_LIVESTOCK_SUCCESS = 'FETCH_LIVESTOCK_SUCCESS';
const fetchLivestockSuccess = livestock => ({
  type: FETCH_LIVESTOCK_SUCCESS,
  livestock
});

export const FETCH_LIVESTOCK_ERROR = 'FETCH_LIVESTOCK_ERROR';
const fetchLivestockError = error => ({
  type: FETCH_LIVESTOCK_ERROR,
  error
});

export const DELETE_LIVESTOCK_SUCCESS = 'DELETE_LIVESTOCK_SUCCESS';
const deleteLivestockSuccess = id => ({
  type: DELETE_LIVESTOCK_SUCCESS,
  id
});

export const fetchLivestock = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchLivestockRequest());
  fetch(`${API_BASE_URL}/api/livestock`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(livestock => dispatch(fetchLivestockSuccess(livestock)))
    .catch(error => dispatch(fetchLivestockError(error)))
};

export const addLivestock = (name, scientificName, grouping, quantity) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/livestock`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ name, scientificName, grouping, quantity })
  })
    .then(res => res.json())
    .then(() => dispatch(fetchLivestock()))
    .catch(err => console.log(err))
};

export const updateLivestock = (name, scientificName, grouping, quantity, id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/livestock/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({ name, scientificName, grouping, quantity })
  })
    .then(res => res.json())
    .then(() => dispatch(fetchLivestock()))
    .catch(err => console.log(err))
};

export const deleteLivestock = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/livestock/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(() => dispatch(deleteLivestockSuccess(id)))
    .catch(error => console.log(error))
}
