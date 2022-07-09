import React from 'react';

export default function Policy() {
  const _title = 'We present to you the policy of our site.';
  const _subtitle = `We take care of your comfort and safety by providing a top-notch public forum service on the world's great places. Please read the rules and regulations.`;
  return (
    <div className='policy'>
      <div className='container'>
        <div className='row policy__content'>
          <div className='col-6'>
            <div className='policy__content__heading'>
              <div className='policy__content__heading--title'>{_title}</div>
              <div className='policy__content__heading--subtitle'>
                {_subtitle}
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='policy__content__body'>Body</div>
          </div>
        </div>
      </div>
    </div>
  );
}
