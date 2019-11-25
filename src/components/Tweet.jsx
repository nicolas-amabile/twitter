import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

const Tweet = ({ currentUser, user = {}, retweetedBy, content, date, likes, retweets }) => (
  <div className="tweet">
    {!!retweetedBy && <div className="tweet-header"> {`🔃 ${retweetedBy} Retweeted`} </div>}
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
           * Add a new tweet with the same content + `🔃 ${currentUser.name} Retweeted`
           */
        }}
      >
        🔃{retweets}
      </span>
    </div>
  </div>
);

Tweet.propTypes = {
  currentUser: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  retweetedBy: PropTypes.object,
  content: PropTypes.any.isRequired,
  date: PropTypes.object.isRequired,
  likes: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
};

Tweet.defaultProps = {
  retweetedBy: null,
};

export default Tweet;
