import React from 'react';
import PropTypes from 'prop-types';

const FollowButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="follow-button"
    type="button"
  >
    FOLLOW
  </button>
);

FollowButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FollowButton;
