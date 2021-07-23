import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTweets, getUser, getContacts } from "./actions";
import Menu from "./components/Menu";
import NewTweet from "./components/NewTweet";
import TweetsList from "./components/TweetsList";
import SideBar from "./components/SideBar";
import "./App.css";

const App = ({ getTweets, getUser, getContacts, tweets, contacts, user }) => {
  useEffect(() => {
    getTweets();
    getUser();
    getContacts();
  }, [getContacts, getTweets, getUser]);

  return (
    <div className="App">
      <Menu />
      <div className="main-content">
        <NewTweet />
        <TweetsList tweets={tweets} contacts={contacts} user={user} />
      </div>
      <SideBar />
    </div>
  );
};

const mapStateToProps = (store) => ({
  user: store.user,
  tweets: store.tweets,
  contacts: store.contacts,
});

export default connect(mapStateToProps, {
  getTweets,
  getUser,
  getContacts,
})(App);
