import React from 'react';

export default function DetailsBasicsBox({ title, body }) {
  return (
    <div className='col-6'>
      <div className='details__basics'>
        <div className='details__basics__title animation'>{title}</div>
        <div className='details__basics__body animation'>{body}</div>
      </div>
    </div>
  );
}
