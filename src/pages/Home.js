import React from 'react';
import Header from '../layout/Header';
import SignModal from '../layout/SignModal';

export default function Home() {
  return (
    <>
      <Header>
        <button className='btn-default'>Get Started</button>
      </Header>
      <SignModal></SignModal>
    </>
  );
}
