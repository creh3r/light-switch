// eslint-disable-next-line import/no-unresolved
import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

describe('<Header /> component', () => {
  it('... should match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
