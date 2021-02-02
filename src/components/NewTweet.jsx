import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';
import useLocalStorage from '../utils/useLocalStorage';

// const MAX_CHARS = 60; // TODO: Implement max for input

export const NewTweet = ({user, addTweet}) => {
  const [stateLocalStorage, setLocalStorage] = useLocalStorage("tweet");
  const [text, setText] = React.useState(stateLocalStorage ?? '');

  const publishTweet = () => {
    addTweet({
      content: text,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
    });

    setText('');
  }

  const _handleChange = ({ target: { value } }) => {
    setText(value);
    
    //TODO: Add Debounce lodash here to improve performance
    setLocalStorage(value)
  }

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
        onChange={_handleChange}
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
}

NewTweet.propTypes = {
  user: PropTypes.object.isRequired,
  addTweet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { addTweet: addTweetAction })(NewTweet);
