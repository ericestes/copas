import React from 'react';
import { shallow } from 'enzyme';
import { Base, Check, Close } from './index';

it('Base: no props', () => {
  const wrapper = shallow(<Base />);
  expect(wrapper).toBeDefined();
  expect(wrapper.props().width).toEqual('100%');
  expect(wrapper.props().height).toBeNull();
});

it('Base: width', () => {
  const wrapper = shallow(<Base width="foo" />);
  expect(wrapper.props().width).toEqual('foo');
  expect(wrapper.props().height).toBeNull();
});

it('Base: height', () => {
  const wrapper = shallow(<Base height="foo" />);
  expect(wrapper.props().width).toBeNull();
  expect(wrapper.props().height).toEqual('foo');
});

it('Check', () => {
  const wrapper = shallow(<Check />);
  expect(wrapper).toBeDefined();

  const viewBox = wrapper.find(Base).props().viewBox;
  expect(viewBox).toBeDefined();
});

it('Close', () => {
  const wrapper = shallow(<Close />);
  expect(wrapper).toBeDefined();

  const viewBox = wrapper.find(Base).props().viewBox;
  expect(viewBox).toBeDefined();
});
