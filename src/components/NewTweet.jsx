import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

// const MAX_CHARS = 60; // TODO: Implement max for input

const useTweetPersist = () => {
  const initialValue = window.localStorage.getItem('pendingTweet');

  const [text, setText] = useState(initialValue || '');

  useEffect(() => {
    window.localStorage.setItem('pendingTweet', text);
  }, [text]);

  return [text, setText];
};

const publishTweet = (user, addTweet, text) => {
  addTweet({
    content: text,
    userId: user.id,
    likes: [],
    date: new Date(),
    retweets: 0,
  });
  window.localStorage.setItem('pendingTweet', '');
}

const NewTweet = ({ user, addTweet }) => {
  const [text, setText] = useTweetPersist();

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
        onChange={({ target: { value } }) => setText(value)}
      />
      <button
        className="new-tweet-button"
        type="button"
        data-testid="new-tweet-button"
        onClick={() => publishTweet(user, addTweet, text)}
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
