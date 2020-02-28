// eslint-disable-next-line import/no-unresolved
import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

describe('<Footer /> component', () => {
  it('... should match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
