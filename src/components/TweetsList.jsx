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
    // TODO: Get the full user object given the tweet.userId
    return (
      <div className="tweets-container">
        {this.state.tweets.map(tweet => <Tweet {...tweet} />)}
      </div>
    );
  }
}

TweetsList.propTypes = {
  tweets: PropTypes.array.isRequired,
};

export default TweetsList;
