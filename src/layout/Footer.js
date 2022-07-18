import React from 'react';

export default function Footer() {
  const _logo = '/assets/icons/logo.png';
  const _heading_text =
    'Remember to do what you love. TripWithMe is an innovative site for travelers where you can find memories and inspiration from others or discover something for yourself. The design of the site was realized in the form of a course that allows you to implement yourself in building a React application structure. The project was prepared with passion and fierceness.';

  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='footer__heading'>
              <img className='footer__heading__logo' src={_logo} alt='' />
              <div className='footer__heading__text'>{_heading_text}</div>
            </div>
          </div>
          <div className='col-6'>
            <div className='footer__body'></div>
          </div>
          <div className='col-12'>
            <div className='footer__copyrights'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
