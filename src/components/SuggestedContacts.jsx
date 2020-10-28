import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Contact from './Contact';

const SuggestedContacts = ({ contacts, user }) => (
  <div className="suggested-contacts-container">
    <h3>Who to follow</h3>
    {(contacts || []).map(contact => {
      const contactProps = {
        key: `contact-${contact.id}`,
        contact,
        followContact: user.contacts.includes(contact.id)
      };
      return <Contact {...contactProps} />;
    })}
  </div>
);

SuggestedContacts.propTypes = {
  contacts: PropTypes.array.isRequired
};

const mapStateToProps = ({ contacts, user }) => ({ contacts, user });
export default connect(mapStateToProps)(SuggestedContacts);
