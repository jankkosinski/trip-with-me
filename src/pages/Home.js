import React, { useContext } from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';
import SignModal from '../components/SignModal';
import SignModalContext from '../context/SignModalContext';
import { OPEN_MODAL, PAYLOAD } from '../context/types/SignModalTypes';
import Header from '../layout/Header';

export default function Home() {
  const { dispatch } = useContext(SignModalContext);
  const title = 'Get Started';
  return (
    <>
      <Header>
        <button
          className='btn-start'
          onClick={() => dispatch({ type: OPEN_MODAL, payload: PAYLOAD.login })}
        >
          {title}
        </button>
      </Header>
      <SignModal payload={PAYLOAD.register}>
        <Register></Register>
      </SignModal>
      <SignModal payload={PAYLOAD.login}>
        <Login></Login>
      </SignModal>
    </>
  );
}
