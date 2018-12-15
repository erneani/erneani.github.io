import React from 'react';

import './label.scss';

export const Label = (props) => {
  return (
    <div className={props.className}>{props.label}</div>
  )
}
