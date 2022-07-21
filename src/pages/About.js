import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function About() {
  const _title = 'About';
  const _intro_text = `Let's find out our company, trip with us and always feel good!`;
  return (
    <>
      <Helmet>
        <title>{_title}</title>
      </Helmet>
      <Header title={_title} intro_text={_intro_text}></Header>
      <Footer></Footer>
    </>
  );
}
