import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

export default function CollapsedBox({ header, body }) {
  return (
    <div className='collapse-box'>
      <div className='collapse-box__heading'>
        <BiChevronRight size={'3rem'}></BiChevronRight>
        {header}
      </div>
      <div className='collapse-box__body'>{body}</div>
    </div>
  );
}
