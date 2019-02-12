import React from 'react';
import styled from 'styled-components';
import { CallButton } from '../styles/Variables';

import curriculum from '../misc/curriculum_pt.pdf';

const HeroContainer = styled.div`
  background-image: linear-gradient(-225deg, #ff8000 0%, #e56634 15%, #c9496d 40%, #8000ff 70%);
  font-family: 'Open Sans', sans-serif;
  padding: 5rem 0;
  height: ${window.innerHeight-160}px;
  display: flex;
  flex-direction: column;
`;

const HeroContent = styled.div`
  margin: auto auto;
`;

const HeroTitle = styled.h1`
  text-align: center;
  font-size: 80px;
  color: #fff;
  margin: auto auto;
`;

const HeroSubTitle = styled.h2`
  text-align: right;
  color: #d9d9d9;
  margin: 0 1rem;
  padding: 2rem 0;
`;

const HeroButton = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Olá, me chamo Ernani.</HeroTitle>
        <HeroSubTitle>Sou um Desenvolvedor.</HeroSubTitle>
        <HeroButton>
          <CallButton href={ curriculum } target="_blank">Veja meu curriculum</CallButton>
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  )
}