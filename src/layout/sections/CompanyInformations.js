import React from 'react';

export default function CompanyInformations() {
  const _title = 'About';
  const _description = `TripWithMe, the world's largest travel guidance platform, helps hundreds of millions of people each month become better travelers, from planning to booking to taking a trip. As a travel guidance company available in 43 markets and 22 languages, TripWithMe makes planning easy no matter the trip type.`;
  const _about_image = '/assets/images/about.jpg';
  return (
    <div className='company_informations'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img
              className='company_informations__image'
              src={_about_image}
              alt={_about_image}
            />
          </div>
          <div className='col-6'>
            <div className='company_informations__body'>
              <div className='text__header'>{_title}</div>
              <div className='company_informations__body__text'>
                {_description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
