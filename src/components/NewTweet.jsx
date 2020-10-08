import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

// const MAX_CHARS = 60; // TODO: Implement max for input

function NewTweet() {
  const [ text, setText ] = useState(null);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  const handleOnchange = (e) => {
    setText(e.target.value)
  }

  const publishTweet = () => {
    dispatch(addTweetAction({
      content: text,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
    }));
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
              onChange={handleOnchange}
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

export default NewTweet;
