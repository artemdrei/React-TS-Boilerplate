import React from 'react';
import { testRender, makeTestStore } from '@root/tests/utils';

import Cmp from '.';

const store = makeTestStore();
describe('Sample test', () => {
  it('Should match the snapshot', () => {
    const { container } = testRender(<Cmp />, store);
    expect(container).toMatchSnapshot();
  });
});
