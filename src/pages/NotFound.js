import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../layout/Footer';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1>Not Found</h1>;<Footer></Footer>
    </>
  );
}
