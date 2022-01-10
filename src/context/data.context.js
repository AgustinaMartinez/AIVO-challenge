import { useContext } from 'react';
import AppContext from './index';

export const useData = () => {
  const [storage, setStorage] = useContext(AppContext);

  const setData = data => {
    setStorage({
      status: '',
      data: data,
    });
  };

  return {
    data: storage.data,
    setData,
  };
};
