import React from "react";
import PropTypes from "prop-types";

const FollowButton = ({ onClick, isFollowing }) => (
  <button onClick={onClick} className="follow-button" type="button">
    {isFollowing ? "UNFOLLOW" : "FOLLOW"}
  </button>
);

FollowButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default FollowButton;
