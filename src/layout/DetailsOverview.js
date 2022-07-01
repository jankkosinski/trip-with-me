import React from 'react';

export default function DetailsOverview({ destination }) {
  const { name, details } = destination;
  console.log(destination);
  return (
    <div className='details'>
      <div className='container'>
        <div className='details__header'>{`${name} Overview`}</div>
        <div className='row'>
          <div className='col-8'>
            <div className='details__description'>{details}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
