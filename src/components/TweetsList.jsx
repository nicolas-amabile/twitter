import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

const TweetsList = ({ user, contacts, tweets }) => {
  const list = useMemo(
    () =>
      tweets.sort(
        (d1, d2) => new Date(d2.date).getTime() - new Date(d1.date).getTime()
      ),
    [tweets]
  );

  return (
    <div className="tweets-container">
      {list.map((tweet) => {
        // Get the full user object given the tweet.userId
        const tweetUser = [...contacts, user].find(
          (contact) => contact.id === tweet.userId
        );
        return (
          <Tweet
            key={`tweet-${tweet.id}`}
            {...tweet}
            user={tweetUser}
            currentUser={user}
          />
        );
      })}
    </div>
  );
};

TweetsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  tweets: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default TweetsList;
