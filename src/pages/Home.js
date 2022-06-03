import React, { useContext } from 'react';
import SignModal from '../components/SignModal';
import SignModalContext from '../context/SignModalContext';
import Header from '../layout/Header';

export default function Home() {
  const { openModal } = useContext(SignModalContext);
  return (
    <>
      <Header>
        <button className='btn-default' onClick={openModal}>
          Get Started
        </button>
      </Header>
      <SignModal></SignModal>
    </>
  );
}
