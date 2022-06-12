import React from 'react';

export default function DestinationCard({ destination }) {
  return (
    <div className='col-3'>
      <div className='destinations__card'>
        <img
          className='destinations__card__img'
          alt={destination.image}
          src={destination.image}
        />
      </div>
    </div>
  );
}
