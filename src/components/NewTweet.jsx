import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

const MAX_CHARS = 60;

export class NewTweet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      addTweetButtonDisabled: true,
    };
    this.onTweetInputChange = this.onTweetInputChange.bind(this);
    this.getMaxCharsAllowed = this.getMaxCharsAllowed.bind(this);
  }

  getMaxCharsAllowed() {
    return this.props.maxChars ? this.props.maxChars : MAX_CHARS;
  }

  publishTweet() {
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

  onTweetInputChange(event) {
    
    const { value: text } = event.target;

    const addTweetButtonDisabled = text.length === 0 || text.length > this.getMaxCharsAllowed();

    this.setState({ text, addTweetButtonDisabled });
  }

  render() {
    const { user } = this.props;
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
          onChange={this.onTweetInputChange}
        />
        <button
          className="new-tweet-button"
          type="button"
          data-testid="new-tweet-button"
          onClick={this.publishTweet}
          disabled={this.state.addTweetButtonDisabled}
          title={this.state.addTweetButtonDisabled ? `You need at least one character to proceed` : ''}
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
