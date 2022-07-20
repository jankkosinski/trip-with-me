import React from 'react';
import { Link } from 'react-router-dom';

export default function LinksBox({ links, external }) {
  return links.map((link) => (
    <div key={link.id} className='footer__link'>
      {external ? (
        <a href={link.route} target='_blank' rel='noreferrer'>
          {link.name}
        </a>
      ) : (
        <Link to={link.route}>{link.name}</Link>
      )}
    </div>
  ));
}
