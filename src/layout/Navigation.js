import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import NavContext from '../context/NavContext';

export default function Navigation() {
  const { state, dispatch } = useContext(NavContext);
  console.log(state);
  return state ? (
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
  ) : null;
}
