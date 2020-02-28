// eslint-disable-next-line import/no-unresolved
import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';
import Button from '../Button';

describe('<Header /> component', () => {
  it('... should match snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });

  it('... should have children', () => {
    const wrapper = shallow(
      <Header>
        <Button />
      </Header>,
    );
    expect(wrapper.find(Button)).toHaveLength(1);
  });
});
