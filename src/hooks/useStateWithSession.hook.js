import { useState, useEffect } from 'react';

const useStateWithSession = (value) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    // call set state passing the value from the Storage setState()
  });

  useEffect(() => {
    // TODO persist to LocalStorage the state
  }, [value]);

  return [state, setState];
};

export default useStateWithSession;
