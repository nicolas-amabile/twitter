import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

// const MAX_CHARS = 60; // TODO: Implement max for input

// TODO move this hook out of this file
const useStoredValue = (key) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const storedText = window.localStorage.getItem(key);
    setText(storedText);
  }, [key]);

  const handleTextChanged = (passedText) => {
    setText(passedText);
    window.localStorage.setItem(key, passedText);
  };

  return [text, handleTextChanged];
};

export const NewTweet = ({ user, addTweet }) => {
  const [text, setText] = useStoredValue('pendingTweet');

  const handlePublishTweet = () => {
    addTweet({
      content: text,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
    });
    setText('');
  };

  const handleInputChanged = ({ target: { value } }) => {
    setText(value);
  };

  if (!user || isEmpty(user)) {
    return null;
  }

  return (
    <div className="new-tweet">
      <Avatar src={user.avatar} />
      <input
        className="new-tweet-input"
        placeholder="What's happening?"
        data-testid="new-tweet-input"
        onChange={handleInputChanged}
        value={text}
      />
      <button
        className="new-tweet-button"
        type="button"
        data-testid="new-tweet-button"
        onClick={handlePublishTweet}
      >
        Tweet
      </button>
    </div>
  );
};

NewTweet.propTypes = {
  user: PropTypes.object.isRequired,
  addTweet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { addTweet: addTweetAction })(NewTweet);
