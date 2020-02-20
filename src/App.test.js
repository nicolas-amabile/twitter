import React from 'react';
import App from './App';
import { renderWithRedux } from './utils';

describe('Twitter', () => {
  it('renders without crashing', () => {
    const { container } = renderWithRedux(<App />);
    expect(container).toMatchSnapshot();
  });

  it('posts a tweet correctly', () => {
    // TODO
  });
});
