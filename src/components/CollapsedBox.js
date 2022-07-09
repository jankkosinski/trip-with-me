import React from 'react';

export default function CollapsedBox({ header, body }) {
  return (
    <div className='collapse-box'>
      <div className='collapse-box__heading'>{header}</div>
      <div className='collapse-box__body'>{body}</div>
    </div>
  );
}
