import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ user, content, date, replies, likes, retweets }) => (
  <div className="tweet">

  </div>
);

Tweet.propTypes = {
  user: PropTypes.object.isRequired,
  content: PropTypes.any.isRequired,
  date: PropTypes.object.isRequired,
  replies: PropTypes.array.isRequired,
  likes: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
};

export default Tweet;
