import React from 'react';
import { Hero } from '../components/hero/Hero';
import { Block } from '../components/block/Block';
import { MainTitle} from '../components/main-title/MainTitle';
import { Warning } from '../components/warning/Warning';
import { Label } from '../components/label/Label';

import './home.scss';

export default class Home extends React.Component {
  render() {
    return (
      <Hero>
        <Block className="hero-title-wrapper">
          <MainTitle title="Olá, me chamo " writer="Ernani."/>
        </Block>
        <Warning>
          <Label label="Este site está em construção :)" className="warning-label"/>
        </Warning>
      </Hero>
    )
  }
}
