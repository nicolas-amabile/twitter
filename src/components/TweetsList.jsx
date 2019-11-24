import React, { Component } from 'react';
import Tweet from './Tweet';

class TweetsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null,
    };
  }

  componentDidMount() {

  };

  render () {
    return (
      <div>
        {this.state.tweets.map(tweet => <Tweet {...tweet} />)}
      </div>
    );
  }
};

export default TweetsList;
