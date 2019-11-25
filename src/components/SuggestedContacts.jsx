import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const SuggestedUsers = ({ contacts }) => (
  <div>
    <h3>Who to follow</h3>
    {(contacts || []).map(contact => <Contact {...contact} />)}
  </div>
);

SuggestedUsers.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default SuggestedUsers;
