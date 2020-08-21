import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compareDesc from 'date-fns/compareDesc'
import Tweet from './Tweet';

class TweetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedTweets: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.sortedTweets.length !== nextProps.tweets.length) {
      const sortedTweets = nextProps.tweets.sort(
        (a, b) => compareDesc(new Date(a.date), new Date(b.date))
      );
      this.setState({ sortedTweets });
    }
  }

  render() {
    const { user, contacts } = this.props;
    return (
      <div className="tweets-container">
        {this.state.sortedTweets.map(tweet => {
          // Get the full user object given the tweet.userId
          const tweetUser = [...contacts, user].find(contact => contact.id === tweet.userId);
          return <Tweet key={`tweet-${tweet.id}`} {...tweet} user={tweetUser} currentUser={user} />;
        })}
      </div>
    );
  }
}

TweetsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  tweets: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default TweetsList;
