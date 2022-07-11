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
                <div className='col-4' key={city.id}>
                  <DestinationCard
                    destination={city}
                    explore={0}
                    maximize={1}
                  ></DestinationCard>
                </div>
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
