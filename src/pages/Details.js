import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DestinationsContext from '../context/DestinationsContext';

export default function Details() {
  const { id } = useParams();
  const {
    state: { destinations },
  } = useContext(DestinationsContext);
  const details = destinations.find(
    (destination) => destination.id === parseInt(id)
  );
  console.log(details);
  return <div>{details.name}</div>;
}
