import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

export default function TweetsList({ contacts, tweets, user }) {
  return (
    <div className="tweets-container">
      {tweets?.sort((a, b) => new Date(b.date) - new Date(a.date)).map(tweet => {
        // Get the full user object given the tweet.userId
        const tweetUser = [...contacts, user].find(contact => contact.id === tweet.userId);
        return <Tweet key={`tweet-${tweet.id}`} {...tweet} user={tweetUser} currentUser={user} />;
      })}
    </div>
  );
}

TweetsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  tweets: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};
