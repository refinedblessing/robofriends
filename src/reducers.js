import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants.js';

const initialState = {
  searchTerm: ''
};

export const searchRobots = (state = initialState, action = {}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

const robotInitialState = {
  robots: [],
  isPending: false,
};

export const requestRobots = (state = robotInitialState, action = {}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
