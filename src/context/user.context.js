import { useContext } from 'react';
import AppContext from './index';

export const useLogin = () => {
  const [storage, setStorage] = useContext(AppContext);

  const setUser = user => {
    setStorage(user);
  };

  return {
    user: storage.user,
    setUser,
  };
};
