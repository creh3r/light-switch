// eslint-disable-next-line import/no-unresolved
import { shallow } from 'enzyme';
import React from 'react';
import Grid from './Grid';
import Tile from '../Tile';

describe('<Grid /> component', () => {
  it('... should match snapshot and have tiles', () => {
    const wrapper = shallow(<Grid data={[[0, 1], [1, 0]]} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Tile)).toHaveLength(4);
  });
});
