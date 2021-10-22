import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

// const MAX_CHARS = 60; // TODO: Implement max for input

const NewTweet = (props) => {

  const { user, addTweet } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    if (!user || isEmpty(user)) {
      return null;
    }
  }, []);

  const publishTweet = () => {
    addTweet({
      content: text,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
    });
  }

  const setLocalStorage = () => {

  }

  const onChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="new-tweet">
      <Avatar src={user.avatar} />
      <div>{text}</div>
      <input
        className="new-tweet-input"
        placeholder="What's happening?"
        data-testid="new-tweet-input"
        onChange={(e) => onChange(e)}
        value={text}
      />
      <button
        className="new-tweet-button"
        type="button"
        data-testid="new-tweet-button"
        onClick={publishTweet}
      >
        Tweet
      </button>
    </div>
  );
};

// export class NewTweet extends Component {
//   state = { text: '' }

//   publishTweet() {
//     const { user, addTweet } = this.props;
//     const { text } = this.state;
//     addTweet({
//       content: text,
//       userId: user.id,
//       likes: [],
//       date: new Date(),
//       retweets: 0,
//     });
//   }

//   render() {
//     const { user } = this.props;
//     if (!user || isEmpty(user)) {
//       return null;
//     }
//     return (
//       <div className="new-tweet">
//         <Avatar src={user.avatar} />
//         <input
//           className="new-tweet-input"
//           placeholder="What's happening?"
//           data-testid="new-tweet-input"
//           onChange={({ target: { value } }) => this.setState({ text: value })}
//         />
//         <button
//           className="new-tweet-button"
//           type="button"
//           data-testid="new-tweet-button"
//           onClick={this.publishTweet}
//         >
//           Tweet
//         </button>
//       </div>
//     );
//   }
// }

NewTweet.propTypes = {
  user: PropTypes.object.isRequired,
  addTweet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { addTweet: addTweetAction })(NewTweet);
