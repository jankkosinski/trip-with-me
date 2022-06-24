import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import DestinationsContext from '../context/DestinationsContext';
import Header from '../layout/Header';

export default function Details() {
  const { id } = useParams();
  const {
    state: { destinations },
  } = useContext(DestinationsContext);
  const details = destinations.find(
    (destination) => destination.id === parseInt(id)
  );
  console.log(details);
  return (
    <>
      <Helmet>
        <title>{details.name}</title>
      </Helmet>
      <Header
        title={details.name}
        intro_text={''}
        video_path={''}
        poster_path={details.bigImage}
        logo={''}
      ></Header>
    </>
  );
}
