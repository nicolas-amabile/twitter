import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

// const MAX_CHARS = 60; // TODO: Implement max for input

export const NewTweet = ({ user, addTweet }) => {
  const [text, setText] = useState('');

  const onClick = useCallback(() => {
    addTweet({
      content: text,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
    });
  }, [addTweet, text, user]);

  const onTextChange = useCallback(({ target: { value } }) => {
    setText(value);
    window.localStorage.setItem('pendingTweet', value);
  }, []);

  useEffect(() => {
    const pendingTweet = window.localStorage.getItem('pendingTweet');

    if (pendingTweet) {
      setText(pendingTweet);
    }
  }, []);

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
        onChange={onTextChange}
      />
      <button
        className="new-tweet-button"
        type="button"
        data-testid="new-tweet-button"
        onClick={onClick}
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
