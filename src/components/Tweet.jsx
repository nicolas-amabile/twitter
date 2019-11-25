import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const Tweet = ({ user = {}, content, date, likes, retweets }) => (
  <div className="tweet">
    <div className="tweet-section">
      <Avatar src={user.avatar} />
      <h5>{user.name}</h5>
      <h6>{user.nickname}</h6>
      <span>{date}</span>
    </div>
    <div className="tweet-section">
      {content}
    </div>
    <div className="tweet-section">
      <span
        className="tweet-action"
        onClick={() => {
          /**
           * TODO: Like tweets
           * If tweet.likes contains current user ID => show ❤️, else show 💙
           */
        }}
      >
        💙{likes.length}
      </span>
      <span
        className="tweet-action"
        onClick={() => {
          // TODO: Retweet feature
          /**
           * Add a new tweet with the same content + `🔃 ${user.name} Retweeted`
           */
        }}
      >
        🔃{retweets}
      </span>
    </div>
  </div>
);

Tweet.propTypes = {
  user: PropTypes.object.isRequired,
  content: PropTypes.any.isRequired,
  date: PropTypes.object.isRequired,
  likes: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
};

export default Tweet;
