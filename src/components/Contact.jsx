import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import FollowButton from './FollowButton';

const Contact = ({ contact }) => (
  <div className="contact">
    <Avatar src={contact.avatar} />
    <span>{contact.name}</span>
    <span>{contact.nickname}</span>
    <FollowButton />
  </div>
);

Contact.propTypes = {
  contact: PropTypes.shape({
    avatar: PropTypes.object,
    name: PropTypes.string,
    nickname: PropTypes.string,
  }).isRequired,
};

export default Contact;
