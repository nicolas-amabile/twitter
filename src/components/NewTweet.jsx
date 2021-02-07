import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTweet as addTweetAction } from "../actions";
import Avatar from "./Avatar";
import { isEmpty } from "../utils";

import "./NewTweet.css";

// const MAX_CHARS = 60; // TODO: Implement max for input

export class NewTweet extends Component {
  state = { text: "" };

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

  render() {
    const { text } = this.state;
    const { user } = this.props;
    if (!user || isEmpty(user)) {
      return null;
    }
    return (
      <div className="new-tweet">
        <div className="new-tweet__input-wrapper">
          <Avatar src={user.avatar} />
          <input
            className="new-tweet-input"
            placeholder="What's happening?"
            data-testid="new-tweet-input"
            maxLength={60}
            onChange={({ target: { value } }) => this.setState({ text: value })}
          />
        </div>
        <div className="new-tweet__footer">
          <img
            src="https://user-images.githubusercontent.com/8633440/92600704-4a091180-f282-11ea-97cb-f847f519bb2a.png"
            alt="icon fake buttons"
          />
          <button
            className="new-tweet-button"
            type="button"
            data-testid="new-tweet-button"
            onClick={this.publishTweet}
            disabled={!text}
          >
            Tweet
          </button>
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
