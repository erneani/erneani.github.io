import React from 'react';
import TypeWriter from 'react-typewriter';

import './main-title.scss';

export const MainTitle = (props) => {
  return (
    <h1 className={"main-title "+props.className}>
      {props.title}<TypeWriter typing={1}>{props.writer}</TypeWriter>
    </h1>
  )
}
