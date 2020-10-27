import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NewTweet } from './NewTweet';

const user = {
  id: 1,
  name: 'Jeremy',
  avatar: { src: '/avatar' }
}

const addTweet = () => {
  console.log('Adding Tweet')
}

describe('New tweet', () => {
  test('it renders correctly', () => {
    const { container } = render(<NewTweet user={user} addTweet={addTweet} />);
    expect(container).toMatchSnapshot();
  });
  
  test('Enforce max length for tweet by using the maxChars prop to 30 chars', () => {
    const { getByTestId } = render(<NewTweet maxChars={30} user={user} addTweet={addTweet} />);
    
    const input = getByTestId('new-tweet-input');
    const button = getByTestId('new-tweet-button');

    fireEvent.change(input, { target: {value: 'This is my first tweet with more than 30 chars'}});

    expect(button).toHaveProperty('disabled', true);

    fireEvent.change(input, { target: {value: 'Less than 30 chars'}});

    expect(button).toHaveProperty('disabled', false);

  });

  test("Enforce max length for tweet, using default value", () => {

    const { getByTestId } = render(<NewTweet user={user} addTweet={addTweet} />);
    
    const input = getByTestId('new-tweet-input');

    const button = getByTestId('new-tweet-button');

    fireEvent.change(input, { target: {value: 'This is my first tweet with more than 60 chars. This is my first tweet with more than 60 chars.'}});

    expect(button).toHaveProperty('disabled', true);

    fireEvent.change(input, { target: {value: 'Less than 60 chars'}});

    expect(button).toHaveProperty('disabled', false);

  });

});
