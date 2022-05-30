import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS
} from './constants.js';

const mockStore = configureStore([thunkMiddleware])

describe('setSearchTerm', () => {
  it('should create an action to search robots', () => {
    const expectedAction = {
      type: CHANGE_SEARCH_FIELD,
      payload: 'woo'
    };
    expect(actions.setSearchTerm('woo')).toEqual(expectedAction)
  })
})

describe('requestRobots', () => {
  const mockJson = [
    {
      id: 1,
      name: 'fanfk',
      username: 'meee',
      email: 'jj@gmail.com'
    },
    {
      id: 2,
      name: 'fanfk',
      username: 'meee',
      email: 'jj@gmail.com'
    }
  ]

  beforeEach(() => {
    fetch.resetMocks()
  })

  it('handles requestRobots API', () => {
    const store = mockStore()
    store.dispatch(actions.requestRobots())
    const action = store.getActions()[0]
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };
    expect(action).toEqual(expectedAction)
  })

  it('creates REQUEST_ROBOTS_SUCCESS after succeful fetch', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockJson))

    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: mockJson
      },
    ]

    const store = mockStore()
    await store.dispatch(actions.requestRobots())
    expect(store.getActions()).toMatchObject(expectedActions)
  })

  it('creates REQUEST_ROBOTS_FAILED after failed fetch', async () => {
    fetch.mockReject(() => Promise.reject('Error'))

    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Error'
      },
    ]

    const store = mockStore()
    await store.dispatch(actions.requestRobots())
    expect(store.getActions()).toMatchObject(expectedActions)
  })
})
