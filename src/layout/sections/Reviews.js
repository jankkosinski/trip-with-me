import React, { useContext } from 'react';
import ReviewsContext from '../../context/ReviewsContext';

export default function Reviews() {
  const { state } = useContext(ReviewsContext);
  console.log(state);
  return <div>Reviews</div>;
}
