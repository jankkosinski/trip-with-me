import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function DestinationCard({ destination }) {
  return (
    <div className='col-3'>
      <div className='destinations__card'>
        <LazyLoadImage
          className='destinations__card__img'
          alt={destination.image}
          src={destination.image}
        />
      </div>
    </div>
  );
}
