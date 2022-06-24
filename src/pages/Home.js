import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import SignModal from '../components/SignModal';
import SignModalContext from '../context/SignModalContext';
import { OPEN_MODAL, PAYLOAD } from '../context/types/SignModalTypes';
import Destinations from '../layout/Destinations';
import Header from '../layout/Header';

export default function Home() {
  const { dispatch } = useContext(SignModalContext);
  const title = 'Get Started';
  return (
    <>
      <Helmet>
        <title>Trip With Me</title>
      </Helmet>
      <Header>
        <button
          className='btn-start'
          onClick={() => dispatch({ type: OPEN_MODAL, payload: PAYLOAD.login })}
        >
          {title}
        </button>
      </Header>
      <SignModal></SignModal>
      <Destinations></Destinations>
    </>
  );
}
