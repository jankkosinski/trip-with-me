import React from 'react';

export default function DetailsOverview({ details }) {
  const { name } = details;
  console.log(details);
  return (
    <div className='details'>
      <div className='container'>
        <div className='details__header'>{`${name} Overview`}</div>
      </div>
    </div>
  );
}
