import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

const TweetsList = ({ user, contacts, tweets: propTweets }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const tweetComponents = propTweets
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map(tweet => {
      // Get the full user object given the tweet.userId
        const tweetUser = [...contacts, user].find(contact => contact.id === tweet.userId);
        return <Tweet key={`tweet-${tweet.id}`} {...tweet} user={tweetUser} currentUser={user} />;
      });
    setTweets(tweetComponents);
  }, [contacts, propTweets, user]);

  return (
    <div className="tweets-container">
      {tweets}
    </div>
  );
};

TweetsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  tweets: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default TweetsList;
