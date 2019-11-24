import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

const SuggestedContacts = ({ contacts }) => (
  <div>
    {contacts.map(contact => <Contact {...contact} />)}
  </div>
);

SuggestedContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default SuggestedContacts;
