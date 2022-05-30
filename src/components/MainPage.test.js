import { shallow } from 'enzyme'
import MainPage from './MainPage';
import React from 'react'

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    onSearchChange: jest.fn(),
    robots: [],
    searchTerm: '',
    isPending: false,
  }
  wrapper = shallow(<MainPage {...mockProps}/>)
})

it('should expect Mainpage to render', () => {
  expect(wrapper).toMatchSnapshot()
})

