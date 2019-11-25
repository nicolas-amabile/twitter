import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet } from '../actions';
import Avatar from './Avatar';

export class NewTweet extends Component {
  state = { text: '' }

  addTweet() {
    const { addTweet } = this.props;
    const { text } = this.state;
    addTweet(text);
    this.setState({ text: '' });
  }

  render() {
    const { user } = this.props;
    return (
      <div className="new-tweet">
        <Avatar src={user.avatar} />
        <input
          className="new-tweet-input"
          placeholder="What's happening?"
          data-testid="new-tweet-input"
          onChange={text => this.setState({ text })}
        />
        <button
          className="new-tweet-button"
          type="button"
          data-testid="new-tweet-button"
          onClick={this.addTweet}
        >
          Tweet
        </button>
      </div>
    );
  }
}

NewTweet.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { addTweet })(NewTweet);
