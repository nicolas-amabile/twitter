import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTweets, getUser, getContacts } from './actions';
import Menu from './components/Menu';
import NewTweet from './components/NewTweet';
import TweetsList from './components/TweetsList';
import SideBar from './components/SideBar';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getTweets();
    this.props.getUser();
    this.props.getContacts();
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <div className='main-content'>
          <NewTweet />
          <TweetsList
            tweets={this.props.tweets}
            contacts={this.props.contacts}
            user={this.props.user}
          />
        </div>
        <SideBar />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user,
  tweets: store.tweets,
  contacts: store.contacts,
});

export default connect(mapStateToProps, {
  getTweets,
  getUser,
  getContacts,
})(App);
