import { shallow } from 'enzyme'
import Card from './Card';
import React from 'react'

it ('enzyme works', () => {
  expect(shallow(<Card/>).length).toEqual(1)
  expect(shallow(<Card/>)).toMatchSnapshot();
})