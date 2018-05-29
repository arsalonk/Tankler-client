import {API_BASE_URL} from '../config';

export const FETCH_FISH_REQUEST = 'FETCH_FISH_REQUEST';
const fetchFishRequest = () => {
  return {
    type: FETCH_FISH_REQUEST
  };
};

export const FETCH_FISH_SUCCESS = 'FETCH_FISH_SUCCESS';
const fetchFishSuccess = (fish) => {
  return {
    type: FETCH_FISH_SUCCESS,
    fish
  };
};

export const FETCH_FISH_ERROR = 'FETCH_FISH_ERROR';
const fetchFishError = error => {
  return {
    type: FETCH_FISH_ERROR,
    error
  };
};

export const fetchFish = () => dispatch => {
  dispatch(fetchFishRequest());
  fetch(`${API_BASE_URL}/api/fish`)
    .then(response => response.json())
    .then(fish => dispatch(fetchFishSuccess(fish)))
    .catch(error => dispatch(fetchFishError(error)));
};