import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import DestinationsContext from '../context/DestinationsContext';
import DetailsOverview from '../layout/DetailsOverview';
import Header from '../layout/Header';

export default function Details() {
  const { id } = useParams();
  const {
    state: { destinations },
  } = useContext(DestinationsContext);
  const destinationData = destinations.find(
    (destination) => destination.id === parseInt(id)
  );
  return (
    <>
      <Helmet>
        <title>{destinationData.name}</title>
      </Helmet>
      <Header
        title={destinationData.name}
        intro_text={''}
        video_path={''}
        poster_path={destinationData.bigImage}
        logo={''}
      ></Header>
      <DetailsOverview destination={destinationData}></DetailsOverview>
    </>
  );
}
