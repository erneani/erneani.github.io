import React from 'react';

import './warning.scss';

export const Warning = (props) => {
  return (
    <div className="warning-div">
      {props.children}
    </div>
  )
}
