import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Footer() {
  const _logo = '/assets/icons/logo.png';
  const _heading_text =
    'Remember to do what you love. TripWithMe is an innovative site for travelers where you can find memories and inspiration from others or discover something for yourself. The design of the site was realized in the form of a course that allows you to implement yourself in building a React application structure. The project was prepared with passion and fierceness.';
  const _copyrights = `TripWithMe, Inc., an not existing company. All rights are not reserved. TripWithMe are not trademarks and not registered anywhere. Project was created by `;
  const _owner_link = 'https://github.com/jankkosinski';
  const _owner_name = 'Jan Kosiński';
  const _greetings = '. Greetings to all visitors!';

  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='footer__heading'>
              <LazyLoadImage
                className='footer__heading__logo'
                src={_logo}
                alt={_logo}
              />
              <div className='footer__heading__text'>{_heading_text}</div>
            </div>
          </div>
          <div className='col-6'>
            <div className='footer__body'></div>
          </div>
          <div className='footer__copyrights'>
            <div className='footer__copyrights__text'>
              {' '}
              &copy;
              {new Date().getFullYear()} {_copyrights}
              <a href={_owner_link}>{_owner_name}</a>
              {_greetings}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
