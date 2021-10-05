import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTweet as addTweetAction } from '../actions';
import Avatar from './Avatar';
import { isEmpty } from '../utils';

// const MAX_CHARS = 60; // TODO: Implement max for input

const NewTweet = (props) => {
  const [value, setValue] = useState('');
  const {user} = props;

  if (!user || isEmpty(user)) {
    return null;
  }

  const publishTweet = (e) => {
    props.addTweet({
      content: value,
      userId: user.id,
      likes: [],
      date: new Date(),
      retweets: 0,
    });
    setValue('');
  }

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  return (
    <div className="new-tweet">
      <Avatar src={user.avatar} />
      <input
        className="new-tweet-input"
        placeholder="What's happening?"
        data-testid="new-tweet-input"
        onChange={onChange}
        value={value}
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

NewTweet.propTypes = {
  user: PropTypes.object.isRequired,
  addTweet: PropTypes.func.isRequired,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { addTweet: addTweetAction })(NewTweet);