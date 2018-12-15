import React from 'react';

import './navbar.scss';

export const Navbar = (props) => {
  return (
    <div className="navbar">
      { props.children }
    </div>
  )
}
