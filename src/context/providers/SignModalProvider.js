import React, { useReducer } from 'react';
import SignModalContext from '../SignModalContext';

export default function SignModalProvider({ children }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type === 'OPEN_MODAL') return { modalStatus: true };
      else if (action.type === 'CLOSE_MODAL') return { modalStatus: false };
      else return state;
    },
    { modalStatus: false }
  );

  return (
    <SignModalContext.Provider value={{ state, dispatch }}>
      {children}
    </SignModalContext.Provider>
  );
}
