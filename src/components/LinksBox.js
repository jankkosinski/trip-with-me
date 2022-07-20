import React from 'react';
import { Link } from 'react-router-dom';

export default function LinksBox({ links }) {
  console.log(links);
  return links.map((link) => (
    <div key={link.id} className='footer__link'>
      <Link to={link.route}>{link.name}</Link>
    </div>
  ));
}
