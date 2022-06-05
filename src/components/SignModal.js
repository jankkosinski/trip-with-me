import React, { useContext } from 'react';
import SignModalContext from '../context/SignModalContext';

export default function SignModal() {
  const { state, dispatch } = useContext(SignModalContext);
  const close = (e) => {
    if (e.target.getAttribute('class') === 'modal')
      dispatch({ type: 'CLOSE_MODAL' });
  };
  return state.modalStatus ? (
    <div className='modal' onClick={close}>
      <div className='modal__body'>SignModal body</div>
    </div>
  ) : null;
}
