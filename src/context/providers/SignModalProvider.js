import React, { useState } from 'react';
import SignModalContext from '../SignModalContext';

export default function SignModalProvider({ children }) {
  const [state, dispatch] = useState({ modalStatus: false });
  const openModal = () => {
    dispatch({ modalStatus: true });
  };
  const closeModal = () => {
    dispatch({ modalStatus: false });
  };
  return (
    <SignModalContext.Provider value={{ state, openModal, closeModal }}>
      {children}
    </SignModalContext.Provider>
  );
}
