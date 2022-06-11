import React, { useContext } from 'react';
import NavContext from '../context/NavContext';
import { NAV_TOGGLE } from '../context/types/NavTypes';

export default function NavToggleButton() {
  const { state, dispatch } = useContext(NavContext);
  return (
    <div className='nav__toggle'>
      <button onClick={() => dispatch({ type: NAV_TOGGLE })}>+</button>
    </div>
  );
}
