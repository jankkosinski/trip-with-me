import React from 'react';

export default function Register() {
  const title = 'Create new account';
  const submit = 'Sign Up';
  const link_text = 'Already you have an account?';
  return (
    <form>
      <div className='modal__heading'>
        <h3>{title}</h3>
      </div>
      <div className='modal__groups'>
        <div className='control'>
          <input
            type='text'
            name='name'
            className='control__input'
            placeholder='Enter name'
          />
        </div>
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
            placeholder='Create password'
          />
        </div>
        <div className='control'>
          <button className='btn-submit control__full'>{submit}</button>
          <div className='control__link'>{link_text}</div>
        </div>
      </div>
    </form>
  );
}