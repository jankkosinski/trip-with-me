import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function LinksBox({ links, external }) {
  const location = useLocation();
  const scrollIfSamePage = (route) => {
    if (location.pathname === route)
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return links.map((link) => (
    <div key={link.id} className='footer__link'>
      {external ? (
        <a href={link.route} target='_blank' rel='noreferrer'>
          {link.name}
        </a>
      ) : (
        <Link onClick={() => scrollIfSamePage(link.route)} to={link.route}>
          {link.name}
        </Link>
      )}
    </div>
  ));
}
