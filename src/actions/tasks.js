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

export const fetchTasks = () => dispatch => {
  dispatch(fetchTasksRequest());
  fetch(`${API_BASE_URL}/api/tasks`)
    .then(response => response.json())
    .then(tasks => dispatch(fetchTasksSuccess(tasks)))
    .catch(error => dispatch(fetchTasksError(error)));
};