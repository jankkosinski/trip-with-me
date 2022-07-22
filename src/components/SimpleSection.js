import React from 'react';

export default function SimpleSection({ title, description, children }) {
  return (
    <div className='simple-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>{children}</div>
          <div className='col-6'>
            <div className='simple-section__body'>
              <div className='text__header'>{title}</div>
              <div className='simple-section__body__text'>{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
