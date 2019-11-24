import React from 'react';
import Menu from './components/Menu';
import NewTweet from './components/NewTweet';
import TweetsList from './components/TweetsList';
import SideBar from './components/SideBar'
import './App.css'

function App() {
  return (
    <div className="App">
      <Menu />
      <div className='main-content'>
        <NewTweet />
        <TweetsList />
      </div>
      <SideBar />
    </div>
  )
}

export default App;
