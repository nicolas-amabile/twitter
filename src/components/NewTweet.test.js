import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NewTweet } from './NewTweet';

describe('New tweet', () => {
  test('it renders correctly', () => {
    const { container } = render(<NewTweet />);
    expect(container).toMatchSnapshot();
  });
  test.skip('Enforce max lenght for tweet', () => {
    const { container, getByTestId } = render(<NewTweet />);
    const input = getByTestId('new-tweet-input');
    const button = getByTestId('new-tweet-button');
    // TODO: Try to type more than max number of chars and validate the result
  });
});
