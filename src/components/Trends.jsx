import React from 'react';
import PropTypes from 'prop-types';

const Trends = ({ trends }) => (
  <div>
    <h3>Trends for you</h3>
    {(trends || []).map(item => <span>{item}</span>)}
  </div>
);

Trends.propTypes = {
  trends: PropTypes.array.isRequired,
};

export default Trends;
