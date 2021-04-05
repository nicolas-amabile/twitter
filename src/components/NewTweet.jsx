import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';
import useTweetStorage from '../hooks/useTweetStorage';

const MAX_CHARS = 60;

const NewTweet = ({ user, addTweet }) => {
  const { storedTweet, handleStoreTweet } = useTweetStorage();
  const [text, setText] = useState('');

  useEffect(() => {
    setText(storedTweet);
  }, [storedTweet]);

  const publishTweet = () => {
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

  const handleTweetChange = (event) => {
    const { target: { value } } = event;
    handleStoreTweet(value);
    setText(value);
  };

  return (
    <div className="new-tweet">
      <Avatar src={user.avatar} />
      <input
        className="new-tweet-input"
        placeholder="What's happening?"
        data-testid="new-tweet-input"
        maxLength={MAX_CHARS}
        onChange={handleTweetChange}
        value={text}
      />
      <button
        className="new-tweet-button"
        type="button"
        data-testid="new-tweet-button"
        onClick={publishTweet}
        disabled={text.length === 0}
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
