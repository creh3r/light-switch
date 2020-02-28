// eslint-disable-next-line import/no-unresolved
import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';
import Button from '../Button';

describe('<Footer /> component', () => {
  it('... should match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('... should have children', () => {
    const wrapper = shallow(
      <Footer>
        <Button />
      </Footer>,
    );
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
