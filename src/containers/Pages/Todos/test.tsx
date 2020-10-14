import React from 'react';
import { screen } from '@testing-library/react';
import { testRender, makeTestStore } from '@root/tests/utils';

import Cmp from './';

describe('Todos Page', () => {
  beforeEach(() => {
    const store = makeTestStore();
    testRender(<Cmp />, store);
  });

  it('Should match snapshot', () => {
    const store = makeTestStore();
    const { container } = testRender(<Cmp />, store);

    expect(container).toMatchSnapshot();
  });

  it('Should has correct title', () => {
    expect(screen.getByText('List of Todos')).toBeTruthy();
  });
});
