import React, { useContext } from 'react';
import SignModalContext from '../context/SignModalContext';

export default function SignModal() {
  const { state, closeModal } = useContext(SignModalContext);
  const close = (e) => {
    if (e.target.getAttribute('class') === 'modal') closeModal();
  };
  return state.modalStatus ? (
    <div className='modal' onClick={close}>
      <div className='modal__body'>SignModal body</div>
    </div>
  ) : null;
}
