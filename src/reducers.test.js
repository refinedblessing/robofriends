import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants.js';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialState = {searchTerm: ''}
  it('should return the initial state', () => {
    expect(reducers.searchRobots()).toEqual(initialState)
  })
  
  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchRobots(initialState, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({searchTerm: 'abc'})
  })
})

describe('requestRobots', () => {
  const initialState = {
    robots: [],
    isPending: false
  }
  it('should return the initial state', () => {
    expect(reducers.requestRobots()).toEqual(initialState)
  })
  
  it('should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initialState, {
      type: REQUEST_ROBOTS_PENDING,
    })).toEqual({...initialState, isPending: true })
  })

  it('should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(initialState, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'failed'
    })).toEqual({...initialState, isPending: false, error: 'failed' })
  })

  it('should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(initialState, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [{id:2, name: 'John'}]
    })).toEqual({isPending: false, robots: [{id:2, name: 'John'}]})
  })
})
