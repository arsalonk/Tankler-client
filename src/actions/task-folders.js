import {API_BASE_URL} from '../config';

export const FETCH_TASKFOLDER_REQUEST = 'FETCH_TASKFOLDER_REQUEST';
const fetchTaskFolderRequest = () => {
  return {
    type: FETCH_TASKFOLDER_REQUEST
  };
};

export const FETCH_TASKFOLDER_SUCCESS = 'FETCH_TASKFOLDER_SUCCESS';
const fetchTaskFolderSuccess = (taskFolder) => {
  return {
    type: FETCH_TASKFOLDER_SUCCESS,
    taskFolder
  };
};

export const FETCH_TASKFOLDER_ERROR = 'FETCH_TASKFOLDER_ERROR';
const fetchTaskFolderError = error => {
  return {
    type: FETCH_TASKFOLDER_ERROR,
    error
  };
};

export const fetchTaskFolder = () => dispatch => {
  dispatch(fetchTaskFolderRequest());
  fetch(`${API_BASE_URL}/api/tasks-folders`)
    .then(response => response.json())
    .then(taskFolder => dispatch(fetchTaskFolderSuccess(taskFolder)))
    .catch(error => dispatch(fetchTaskFolderError(error)));
};