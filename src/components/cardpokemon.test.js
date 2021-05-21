import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'

import { findByTestAttr  } from '../testUtils';
import Card from './cardpokemon'
const defaultProps = { data: [], reload : ()=> true };

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Card {...setupProps} />)
}

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-cardpokemon');
  expect(component.length).toBe(1);
});

test('card pokemon to match snapshot',()=>{
    const wrapper = setup();
    expect(toJson(wrapper)).toMatchSnapshot()
})
