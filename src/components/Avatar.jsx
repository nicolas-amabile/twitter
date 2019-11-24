import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ src }) => <img className="avatar" alt="avatar" src={src} />;

Avatar.propTypes = {
  src: PropTypes.object.isRequired,
};

export default Avatar;
