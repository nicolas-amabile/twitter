import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  FaAccessibleIcon,
  FaAccusoft,
  FaAdn,
  FaBandAid,
  FaAndroid,
} from 'react-icons/fa';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

// const MAX_CHARS = 60; // TODO: Implement max for input

export class NewTweet extends Component {
  state = { text: '' };

  publishTweet = (user, addTweet) => {
    const { text } = this.state;
    addTweet({
      content: text,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
    });
    this.setState({ text: '' });
  };

  render() {
    const { user, addTweet } = this.props;
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
          value={text}
          onChange={({ target: { value } }) => this.setState({ text: value })}
        />
        <button
          className="new-tweet-button"
          type="button"
          data-testid="new-tweet-button"
          onClick={() => this.publishTweet(user, addTweet)}
        >
          Tweet
        </button>
        <div className="buttons">
          <FaAccessibleIcon />
          <FaAccusoft />
          <FaAdn />
          <FaBandAid />
          <FaAndroid />
        </div>
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
