import {API_BASE_URL} from '../config';

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
})

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