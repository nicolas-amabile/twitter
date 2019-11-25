import React from 'react';
import PropTypes from 'prop-types';

const ASSETS_PATH = '../assets/avatars/';

const Avatar = ({ src }) => <img className="avatar" alt="avatar" src={`${ASSETS_PATH}/${src}`} />;

Avatar.propTypes = {
  src: PropTypes.object.isRequired,
};

export default Avatar;
