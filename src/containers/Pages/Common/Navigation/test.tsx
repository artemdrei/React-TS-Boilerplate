import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Wrapper from './';

describe('Sample test', () => {
  const wrapper = shallow(<Wrapper />);

  it('Should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
