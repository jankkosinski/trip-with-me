import React from 'react';

export default function ReviewBox({ review }) {
  return (
    <div className='review'>
      <div className='review__content'>
        <div className='review__content__heading'>
          <img
            className='review__content__heading__image'
            src={review.image}
            alt={review.image}
          />
          <div className='review__content__heading__rating'>{review.stars}</div>
        </div>
        <div className='review__content__info'>
          <div className='review__content__info__name'>{review.name}</div>
        </div>
        <div className='review__content__info__comment'>{review.comment}</div>
      </div>
    </div>
  );
}
