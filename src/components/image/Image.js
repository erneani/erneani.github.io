import React from 'react';

import './image.scss';

export const Image = (props) => {
  return (
      <img alt={props.alt} src={require('../../images/'+props.source)} />
  )
}
