import React, { useContext } from 'react';
import SignModalContext from '../context/SignModalContext';
import { CLOSE_MODAL } from '../context/types/SignModalTypes';

export default function SignModal({ children }) {
  const { state, dispatch } = useContext(SignModalContext);
  const close = (e) => {
    if (e.target.getAttribute('class') === 'modal')
      dispatch({ type: CLOSE_MODAL });
  };
  return state.modalStatus ? (
    <div className='modal' onClick={close}>
      <div className='modal__body'>{children}</div>
    </div>
  ) : null;
}
