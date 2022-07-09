import React from 'react';
import ReviewBox from '../../components/ReviewBox';

export default function Reviews({ reviews }) {
  const _title = 'Reviews';
  return (
    <div className='reviews'>
      <div className='container'>
        <div className='details__subheader'>{_title}</div>
        <div className='row'>
          {reviews.map((review) => (
            <div className='col-3' key={review.id}>
              <ReviewBox data={review}></ReviewBox>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
