import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../layout/Footer';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1>About</h1>
      <Footer></Footer>
    </>
  );
}
