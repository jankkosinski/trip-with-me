import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavContext from '../context/NavContext';
import { NAV_TOGGLE } from '../context/types/NavTypes';

export default function Navigation() {
  const { state, dispatch } = useContext(NavContext);
  return (
    <>
      <div className={`nav ${state ? '' : 'nav--closed'}`}>
        <div className={`nav__content ${state ? '' : 'nav__content--closed'}`}>
          <NavLink
            className='nav__content__link'
            onClick={() => dispatch({ type: NAV_TOGGLE })}
            to='/'
          >
            Home
          </NavLink>
          <NavLink
            className='nav__content__link'
            onClick={() => dispatch({ type: NAV_TOGGLE })}
            to='/about'
          >
            About
          </NavLink>
        </div>
      </div>
    </>
  );
}
