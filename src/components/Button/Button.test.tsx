// eslint-disable-next-line import/no-unresolved
import { shallow } from 'enzyme';
import React from 'react';
import Button from './Button';

describe('<Button /> component', () => {
  it('... should match snapshot', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

  it('... should have theme class', () => {
    const wrapper = shallow(<Button theme="isTest" />);
    expect(wrapper.find('.button--isTest')).toHaveLength(1);
  });
});
