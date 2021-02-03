import { useEffect, useState } from 'react';


const useLocalStorage = (key, initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const localStorageValue = window.localStorage.getItem(key);
    setValue(localStorageValue);
  }, [key]);

  return value;
};

export default useLocalStorage;
