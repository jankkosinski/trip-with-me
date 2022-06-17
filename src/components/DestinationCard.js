import React from 'react';
import { MdPlace } from 'react-icons/md';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
export default function DestinationCard({ destination }) {
  const explore_button = 'Explore';
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
        <div className='destination__card__explore'>
          <Link className='btn-basic' to={`details/${destination.id}`}>
            {explore_button}
          </Link>
        </div>
      </div>
    </div>
  );
}
