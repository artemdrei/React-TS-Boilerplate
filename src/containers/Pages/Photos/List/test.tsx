import React from 'react';
import { testRender, makeTestStore } from '@root/tests/utils';

import Cmp from './';

describe('List of photos', () => {
  beforeEach(() => {
    const store = makeTestStore();
    testRender(<Cmp />, store);
  });

  it('Should match snapshot', () => {
    const store = makeTestStore();
    const { container } = testRender(<Cmp />, store);

    expect(container).toMatchSnapshot();
  });
});
