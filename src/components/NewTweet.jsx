import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';
import useLocalStorage from '../hooks/useLocalStorage';

// const MAX_CHARS = 60; // TODO: Implement max for input

const NewTweet = ({user, addTweet }) => {
  const userIsNull = !user || isEmpty(user);
  const [text, setText] = useState('');

  const {value, setValue} = useLocalStorage('');

  useEffect(() => {
    setValue('something')
    
  })


  const publishTweet = () => {
   
    addTweet({
      content: text,
      userId: user.id,
      likes: [],
      date: new Date().toISOString(),
      retweets: 0,
    });
    setText('');
  }

  return (!userIsNull)? (
      <div className="new-tweet">
        <Avatar src={user.avatar} />
        <input
          value={text}
          className="new-tweet-input"
          placeholder="What's happening?"
          data-testid="new-tweet-input"
          onChange={({ target: { value } }) => setText(value)}
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
    
  ): null;
  
}

NewTweet.propTypes = {
  user: PropTypes.object.isRequired,
  addTweet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { addTweet: addTweetAction })(NewTweet);
