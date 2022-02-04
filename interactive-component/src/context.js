import React from 'react';

import { useContext, useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

// i fextched the datA and put it in local storage, i'll the have to find a way to updtae the state so I can re render new chats

const storageItem = JSON.parse(localStorage.getItem('data'));

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [userIsReplying, setUserIsReplying] = useState(false);

  const fetchInfo = async () => {
    try {
      const info = await fetch('data.json');
      const response = await info.json();
      setUser(response);
      // localStorage.setItem('data', JSON.stringify(response));
      // const storageItem = JSON.parse(localStorage.getItem('data'));
      // setUser(storageItem);
    } catch (error) {
      console.log(error);
      setUser({});
    }
  };

  useEffect(() => {
    if (storageItem) {
      setUser(storageItem);
    } else {
      fetchInfo();
    }
  }, []);

  const chatInput = useRef();
  const replyRef = useRef();

  return (
    <AppContext.Provider
      value={{
        user,
        chatInput,
        replyRef,
        setUser,
        userIsReplying,
        setUserIsReplying,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const UseGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
