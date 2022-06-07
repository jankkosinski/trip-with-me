import React, { useContext } from 'react';
import SignModalContext from '../context/SignModalContext';
import { OPEN_MODAL, PAYLOAD } from '../context/types/SignModalTypes';

export default function Login() {
  const title = 'Login';
  const submit = 'Sign In';
  const link_text = 'Create new account';
  const { dispatch } = useContext(SignModalContext);
  return (
    <form className='fade-form'>
      <div className='modal__heading'>
        <h3>{title}</h3>
      </div>
      <div className='modal__groups'>
        <div className='control'>
          <input
            type='email'
            name='email'
            className='control__input'
            placeholder='Enter email'
          />
        </div>
        <div className='control'>
          <input
            type='password'
            name='password'
            className='control__input'
            placeholder='Enter password'
          />
        </div>
        <div className='control'>
          <button className='btn-submit control__full'>{submit}</button>
          <div
            className='control__link'
            onClick={() =>
              dispatch({ type: OPEN_MODAL, payload: PAYLOAD.register })
            }
          >
            {link_text}
          </div>
        </div>
      </div>
    </form>
  );
}
