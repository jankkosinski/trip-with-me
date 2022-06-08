import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <div className='nav'>
        <div className='nav__content'>
          <NavLink className='nav__content__link' to='/'>
            Home
          </NavLink>
          <NavLink className='nav__content__link' to='/about'>
            About
          </NavLink>
        </div>
      </div>
    </>
  );
}
