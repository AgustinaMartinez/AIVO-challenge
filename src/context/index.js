import { useState, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = props => {
  const [storage, setStorage] = useState(
    {
      data: {
        status: 'pending',
        data: [],
      },
    }
  );

  return (
    <AppContext.Provider value={[storage, setStorage]}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
