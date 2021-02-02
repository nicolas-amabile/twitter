import React from 'react';

const useLocalStorage = (key) => {
  const getLocalStorage = () => {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return "";
    }
  }

  const [stateLocalStorage, setStateLocalStorage] = React.useState(getLocalStorage());

  const setLocalStorage = (value) => {
    try {
      setStateLocalStorage(value);
      window.localStorage.setItem(key, stateLocalStorage);
    } catch (error) {
      console.log('cant save tweet');
    }
  };

  return [stateLocalStorage, setLocalStorage];
};

export default useLocalStorage;
