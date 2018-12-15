import React from 'react';

import './call-button.scss';

export const CallButton = (props) => {
  return (
    <a href={props.href} className={"call-button "+props.className}>{props.label}</a>
  )
}
