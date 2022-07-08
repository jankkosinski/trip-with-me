import React from 'react';
import DestinationCard from '../../components/DestinationCard';

export default function Cities(props) {
  const _title = 'Cities in';
  const { destination, cities } = props;
  return (
    <div className='cities'>
      <div className='container'>
        <div className='cities__content'>
          <div className='details__subheader'>{`${_title} ${destination}`}</div>
          <div className='row'>
            {cities.length > 0 ? (
              cities.map((city) => (
                <DestinationCard
                  key={city.id}
                  destination={city}
                  size='col-4'
                  explore={0}
                ></DestinationCard>
              ))
            ) : (
              <div className='cities__content__empty'>No data available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
