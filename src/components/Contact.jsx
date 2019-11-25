import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

const Contact = ({ contact, followContact, unfollowContact }) => {
  const isFollowing = false; // TODO: Check if the user is following contact
  return (
    <div className="contact">
      <Avatar src={contact.avatar} />
      <span>{contact.name}</span>
      <span>{contact.nickname}</span>
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
    nickname: PropTypes.string,
  }).isRequired,
};

export default Contact;
