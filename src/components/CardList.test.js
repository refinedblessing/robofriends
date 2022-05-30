import { shallow, mount, render } from 'enzyme'
import CardList from './CardList';
import React from 'react'

it ('enzyme works', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Jon Sonow',
      email: 'jj@gmail.com',
      username: 'Josn'
    }
  ]
  expect(shallow(<CardList robots={mockRobots}/>).length).toEqual(1)
  expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})