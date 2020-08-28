import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import { addTweet as addTweetAction } from '../actions';
import { connect } from 'react-redux';

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const Tweet = ({
  user,
  retweetedBy,
  content,
  date,
  likes,
  retweets,
  addTweet
}) => {
  const dateObject = new Date(date);
  const formattedDate = `${months[dateObject.getMonth()]} ${dateObject.getDate()}`;

  const retweet = () => {
    addTweet({
      content,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
      retweetedBy: user.name
    });
  };

  return (
    <div className="tweet">
      {!!retweetedBy && <div className="tweet-header"> {`🔃 ${retweetedBy} Retweeted`} </div>}
      <div className="tweet-section">
        <Avatar src={user.avatar} />
        <div className="tweet-info-container">
          <h5>{user.name}</h5>
          <h6>{`@${user.nickname}`}</h6>
          <h6 className="tweet-date">{formattedDate}</h6>
        </div>
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
            retweet();
          }}
        >
          🔃{retweets}
        </span>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  // currentUser: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  retweetedBy: PropTypes.object,
  content: PropTypes.any.isRequired,
  date: PropTypes.string.isRequired,
  likes: PropTypes.array.isRequired,
  retweets: PropTypes.number.isRequired,
  addTweet: PropTypes.func.isRequired,
};

Tweet.defaultProps = {
  retweetedBy: null,
};

export default connect(null, { addTweet: addTweetAction })(Tweet);