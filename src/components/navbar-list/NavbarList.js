import React from 'react';

import './navbar-list.scss';

const labels = ['Sobre mim','Estudo'];

export const NavbarList = () => {
  return (
    <ul className="navbar-list">
      { labels.map((label) => <li><a href="#" className="navbar-list-element">{label}</a></li>) }
    </ul>
  )
}
