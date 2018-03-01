import React from 'react';
import { shallow } from 'enzyme';
import { Base, Check, Close } from './index';

it('Check tests', () => {
  const wrapper = shallow(<Check />);
  expect(wrapper).toBeDefined();

  const viewBox = wrapper.find(Base).props().viewBox;
  expect(viewBox).toBeDefined();
});

it('Close tests', () => {
  const wrapper = shallow(<Close />);
  expect(wrapper).toBeDefined();

  const viewBox = wrapper.find(Base).props().viewBox;
  expect(viewBox).toBeDefined();
});
