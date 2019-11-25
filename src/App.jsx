import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTweets } from './actions';
import Menu from './components/Menu';
import NewTweet from './components/NewTweet';
import TweetsList from './components/TweetsList';
import SideBar from './components/SideBar'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getTweets();
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <div className='main-content'>
          <NewTweet />
          <TweetsList tweets={this.props.tweets} />
        </div>
        <SideBar />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  tweets: store.tweets,
});

export default connect(mapStateToProps, { getTweets })(App);
