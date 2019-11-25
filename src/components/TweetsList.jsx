import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tweet from './Tweet';

class TweetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: props.tweets || [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.tweets.length !== nextProps.tweets.length) {
      this.state.tweets = nextProps.tweets;
    }
  }

  render() {
    const { user, contacts } = this.props;
    // TODO: Get the full user object given the tweet.userId
    return (
      <div className="tweets-container">
        {this.state.tweets.map(tweet => {
          const tweetUser = [...contacts, user].find(contact => contact.id === tweet.userId); // Get the full user object given the tweet.userId
          return <Tweet {...tweet} user={tweetUser} currentUser={user} />;
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
