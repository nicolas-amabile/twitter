import React, { Component } from 'react';

class SearchBox extends Component {
  state = {
    text: '',
  };

  render () {
    return (
      <div>
        <span role="img" aria-label="search icon">🔎</span>
        <input placeholder="Search" />
      </div>
    );
  }
};

export default SearchBox;
