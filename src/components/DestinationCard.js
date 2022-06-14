import React from 'react';
import { MdPlace } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function DestinationCard({ destination }) {
  return (
    <div className='col-3 destination'>
      <div className='destination__card'>
        <LazyLoadImage
          className='destination__card__img'
          alt={destination.image}
          src={destination.image}
        />
        <div className='destination__card__layer'>
          <div className='destination__card__layer__content'>
            <MdPlace />
            <div>{destination.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
