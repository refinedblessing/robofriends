import { shallow } from 'enzyme'
import CounterButton from './CounterButton';
import React from 'react'

it ('enzyme works', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor}/>).length).toEqual(1)
  expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
})

it('correctly implements counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>)

  wrapper.find('#counter').simulate('click')
  expect(wrapper.find('#counter').text()).toEqual('Count: 1')
  wrapper.find('#counter').simulate('click')
  expect(wrapper.find('#counter').text().includes('2')).toBeTruthy()
})