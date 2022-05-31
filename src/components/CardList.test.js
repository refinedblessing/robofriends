import { shallow } from 'enzyme'
import CardList from './CardList';
import * as React from 'react'

it ('enzyme works', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Jon',
      email: 'jj@gmail.com',
      username: 'Josh'
    }
  ]
  expect(shallow(<CardList robots={mockRobots}/>).length).toEqual(1)
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})