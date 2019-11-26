import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Trends = ({ trends }) => (
  <div className="trends-container">
    <h3>Trends for you</h3>
    {(trends || []).map((item, index) => <span key={index}>{item}</span>)}
  </div>
);

Trends.propTypes = {
  trends: PropTypes.array.isRequired,
};

const mapStateToProps = ({ trends }) => ({ trends });
export default connect(mapStateToProps)(Trends);
