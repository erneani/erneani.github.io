import React from 'react';

import './hero.scss';

export const Hero = (props) => {
  return (
    <div className={"hero "+props.className}>
      {props.children}
    </div>
  )
}
