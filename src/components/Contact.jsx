import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FollowButton from "./FollowButton";

const Contact = ({ contact, followContact }) => {
  const isFollowing = followContact; // TODO: Check if the user is following contact
  return (
    <div className="contact">
      <Avatar src={contact.avatar} />
      <div className="contact-info-container">
        <span className="contact-name">{contact.name}</span>
        <span className="contact-nickname">{`@${contact.nickname}`}</span>
      </div>
      <FollowButton
        isFollowing={isFollowing}
        onClick={() => {
          // TODO: If user is following contact => call unfollowContact. Else call followContact
        }}
      />
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    avatar: PropTypes.object,
    name: PropTypes.string,
    nickname: PropTypes.string
  }).isRequired
};

export default Contact;
