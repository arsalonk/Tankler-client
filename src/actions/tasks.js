import {API_BASE_URL} from '../config';

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST
});

export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
const fetchTasksSuccess = tasks => ({
  type: FETCH_TASKS_SUCCESS,
  tasks
});

export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';
const fetchTasksError = error => ({
  type: FETCH_TASKS_ERROR,
  error
});

export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
const deleteTaskSuccess = (id) => ({
  type: DELETE_TASK_SUCCESS,
  id
});

export const SHOW_CREATE_WINDOW = 'SHOW_CREATE_WINDOW';
export const showCreateWindow = () => ({
  type: SHOW_CREATE_WINDOW,
});

export const HIDE_CREATE_WINDOW = 'HIDE_CREATE_WINDOW';
export const hideCreateWindow = () => ({
  type: HIDE_CREATE_WINDOW
});

export const fetchTasks = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchTasksRequest());
  fetch(`${API_BASE_URL}/api/tasks`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(response => response.json())
    .then(tasks => dispatch(fetchTasksSuccess(tasks)))
    .catch(error => dispatch(fetchTasksError(error)));
};

export const deleteTask = (id) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchTasksRequest());
  fetch(`${API_BASE_URL}/api/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(() => dispatch(deleteTaskSuccess(id)))
    .catch(error => dispatch(fetchTasksError(error)));
};

export const createTask = (name, category) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify({name, category})
  })
    .then(res => res.json())
    .then(() => dispatch(hideCreateWindow()))
    .then(() => dispatch(fetchTasks()))
    .catch(error => dispatch(fetchTasksError(error)))
};