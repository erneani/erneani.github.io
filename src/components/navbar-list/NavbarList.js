import React from 'react';

import './navbar-list.scss';

export const NavbarList = (props) => {
  return (
    <ul className="navbar-list">
      <li><a href={props.link} className="navbar-list-element">{props.label}</a></li>
    </ul>
  )
}
