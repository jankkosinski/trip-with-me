import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavContext from '../context/NavContext';
import { NAV_TOGGLE } from '../context/types/NavTypes';

export default function Navigation() {
  const _homePageTitle = 'Home';
  const _aboutPageTitle = 'About';
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
            {_homePageTitle}
          </NavLink>
          <NavLink
            className='nav__content__link'
            onClick={() => dispatch({ type: NAV_TOGGLE })}
            to='/about'
          >
            {_aboutPageTitle}
          </NavLink>
        </div>
      </div>
    </>
  );
}
