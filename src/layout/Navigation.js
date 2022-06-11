import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavContext from '../context/NavContext';

export default function Navigation() {
  const { state } = useContext(NavContext);
  console.log(state);
  return (
    <>
      <div className={`nav ${state ? '' : 'nav--closed'}`}>
        <div className={`nav__content ${state ? '' : 'nav__content--closed'}`}>
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
