import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants.js';

export const setSearchTerm = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => async (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const robots = await res.json();
    dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: robots })
  } catch (e) {
    dispatch({ type: REQUEST_ROBOTS_FAILED, payload: e })
  }
};
