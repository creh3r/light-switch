// eslint-disable-next-line import/no-unresolved
import { shallow } from 'enzyme';
import React from 'react';
import Grid from './Grid';

describe('<Grid /> component', () => {
  it('... should match snapshot', () => {
    const wrapper = shallow(<Grid data={[[0, 1], [1, 0]]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
