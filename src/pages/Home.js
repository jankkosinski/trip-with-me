import React, { useContext } from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';
import SignModal from '../components/SignModal';
import SignModalContext from '../context/SignModalContext';
import { OPEN_MODAL } from '../context/types/SignModalTypes';
import Header from '../layout/Header';

export default function Home() {
  const { dispatch } = useContext(SignModalContext);
  const title = 'Get Started';
  return (
    <>
      <Header>
        <button
          className='btn-start'
          onClick={() => dispatch({ type: OPEN_MODAL })}
        >
          {title}
        </button>
      </Header>
      <SignModal>
        <Register></Register>
      </SignModal>
      <SignModal>
        <Login></Login>
      </SignModal>
    </>
  );
}
