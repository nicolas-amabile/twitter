import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

const LOCALSTORAGE_TWEET = 'new-tweet';

// const MAX_CHARS = 60; // TODO: Implement max for input
export class NewTweet extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    const localStorageValue = window.localStorage.getItem(LOCALSTORAGE_TWEET);
    this.setState({ text: localStorageValue });
  }

  publishTweet = () => {
    const { user, addTweet } = this.props;
    const { text } = this.state;
    addTweet({
      content: text,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
    });
  }

  handleInput = (event) => {
    this.setState({ text: event.target.value });
    window.localStorage.setItem(LOCALSTORAGE_TWEET, event.target.value);
  }

  render() {
    const { user } = this.props;
    const { text } = this.state;
    if (!user || isEmpty(user)) {
      return null;
    }
    return (
      <div className="new-tweet">
        <Avatar src={user.avatar} />
        <input
          className="new-tweet-input"
          placeholder="What's happening?"
          data-testid="new-tweet-input"
          onChange={(event) => this.handleInput(event)}
          value={text}
        />
        <button
          className="new-tweet-button"
          type="button"
          data-testid="new-tweet-button"
          onClick={this.publishTweet}
        >
          Tweet
        </button>
      </div>
    );
  }
}

NewTweet.propTypes = {
  user: PropTypes.object.isRequired,
  addTweet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { addTweet: addTweetAction })(NewTweet);
