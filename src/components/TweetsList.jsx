import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tweet from './Tweet'

class TweetsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: props.tweets || [],
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.tweets.length !== nextProps.tweets.length) {
      this.state.tweets = nextProps.tweets
    }
  }

  render() {
    const { user, contacts } = this.props

    return (
      <div className='tweets-container'>
        {this.props.tweets
          .sort((a, b) => {
            return a.date >= b.date ? -1 : 1
          })
          .map((tweet) => {
            // Get the full user object given the tweet.userId
            const tweetUser = [...contacts, user].find(
              (contact) => contact.id === tweet.userId
            )
            return (
              <Tweet
                key={`tweet-${tweet.id}`}
                {...tweet}
                user={tweetUser}
                currentUser={user}
              />
            )
          })}
      </div>
    )
  }
}

TweetsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  tweets: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
}

export default TweetsList
