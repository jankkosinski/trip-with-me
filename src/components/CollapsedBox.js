import React, { useState } from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

export default function CollapsedBox({ header, body }) {
  const [collapsed, setCollapsed] = useState(1);
  return (
    <div className='collapse-box'>
      <div
        className='collapse-box__heading'
        onClick={() => setCollapsed((prevState) => !prevState)}
      >
        {collapsed ? (
          <BiChevronRight size={'3rem'}></BiChevronRight>
        ) : (
          <BiChevronDown size={'3rem'}></BiChevronDown>
        )}
        {header}
      </div>
      <div className='collapse-box__body'>
        <div
          className={
            collapsed
              ? 'collapse-box__body--closed'
              : 'collapse-box__body--opened'
          }
        >
          {body}
        </div>
      </div>
    </div>
  );
}
