import { useState, useEffect } from 'react';

const useTweetStorage = () => {
  const [storedTweet, setStoredTweet] = useState('');

  useEffect(() => {
    setStoredTweet(localStorage.getItem('storedTweet') ?? '');
  }, []);

  const handleStoreTweet = (tweet) => {
    localStorage.setItem('storedTweet', tweet);
  };

  return {
    storedTweet, handleStoreTweet,
  };
};

export default useTweetStorage;
