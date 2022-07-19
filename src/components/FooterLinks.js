import React, { useContext } from 'react';
import DestinationsContext from '../context/DestinationsContext';
import { links } from '../data/links';

export default function FooterLinks() {
  const {
    state: { destinations },
  } = useContext(DestinationsContext);

  console.log('Destinations:', destinations);
  console.log('Links:', links);

  return <div>FooterLinks</div>;
}
