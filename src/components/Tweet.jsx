import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from './Avatar';
import { addTweet as addTweetAction, increaseRetweetCount } from '../actions';

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const Tweet = ({
  user,
  retweetedBy,
  content,
  date,
  likes,
  retweets,
  addTweet,
  increaseRetweets,
  currentUser,
  id,
}) => {
  const dateObject = new Date(date);
  const formattedDate = `${months[dateObject.getMonth()]} ${dateObject.getDate()}`;
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
            increaseRetweets({ id });
            addTweet({
              id,
              content: `${content} ${currentUser.name} Retweeted`,
              userId: user.id,
              likes,
              retweets,
              date,
              retweetedBy: currentUser.name,
            });
          }}
        >
          🔃{retweets}
        </span>
      </div>
    </div>
  );
};

Tweet.propTypes = {
  currentUser: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  retweetedBy: PropTypes.object,
  content: PropTypes.any.isRequired,
  date: PropTypes.string.isRequired,
  likes: PropTypes.array.isRequired,
  retweets: PropTypes.number.isRequired,
  addTweet: PropTypes.func.isRequired,
  increaseRetweets: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

Tweet.defaultProps = {
  retweetedBy: null,
};


export default connect(null, {
  addTweet: addTweetAction,
  increaseRetweets: increaseRetweetCount,
})(Tweet);
