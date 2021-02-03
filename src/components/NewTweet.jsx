import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

// const MAX_CHARS = 60; // TODO: Implement max for input

const TWEET_TEXT_KEY = 'tweetText';

const NewTweet = ({ user, addTweet }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const localStorageText = window.localStorage.getItem(TWEET_TEXT_KEY);
    setText(localStorageText);
  }, []);

  const setLocalStorageValue = (value) => window.localStorage.setItem(TWEET_TEXT_KEY, value);

  const hanldeInputChange = ({ target: { value } }) => {
    setText(value);
    setLocalStorageValue(value);
  };

  const publishTweet = () => {
    setText('');
    setLocalStorageValue('');
    addTweet({
      content: text,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
    });
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
        value={text}
        onChange={hanldeInputChange}
      />
      <button
        className="new-tweet-button"
        type="button"
        data-testid="new-tweet-button"
        onClick={publishTweet}
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
