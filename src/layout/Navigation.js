import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <div className='nav'>
        <div className='nav__content'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </div>
      </div>
    </>
  );
}
