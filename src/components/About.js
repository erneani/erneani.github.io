import React from 'react';
import styled from 'styled-components';
import { Section, SectionHeader, SectionTitle, ColoredButton } from '../styles/Variables';
import photo from '../images/photo.jpeg';

const SectionBody = styled.div`
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
  height: 80rem;

  @media screen and (max-width:1020px) {
    display: flex;
    flex-direction: column;
  }
`;

const AboutImage = styled.img`
  grid-area: 1/1;
  border-radius: 100%;
  max-width: 400px;
  margin: auto auto;

  @media screen and (max-width: 475px) {
    width: 80%;
  }
`;

const ContentContainer = styled.div`
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  padding: 1rem;
  display: flex;
  
  justify-content: ${props => props.content};

  @media screen and (max-width:1020px) {
    width: 80%;
    margin: auto auto;
  }
`;

const ContentTitle = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  margin: 0 auto;

  color: ${props => props.color};
`;

const ContentParagraph = styled.p`
  text-align: center;
  margin: 1rem 0;
`;

const ContentButton = styled.div`
  text-align: center;
  padding: 1rem 0;
  margin: 0 auto;
`;

export const About = () => {
  return (
    <Section>
      <SectionHeader id="about">
        <SectionTitle orange='#ff8000'>Sobre mim</SectionTitle>
      </SectionHeader>
      <SectionBody>
        <AboutImage src={photo} />
        <ContentContainer content='flex-start'>
          <ContentTitle color='#ff8000'>
            Quem sou eu?
          </ContentTitle>
          <ContentParagraph>
            Potiguar, cursando graduação em Tecnologia da Informação pela UFRN, Técnico em Informática pelo IFRN, amante de Design, de ciência de dados, de desafios de programação e, principalmente, de desenvolvimento WEB.
          </ContentParagraph>
          <ContentButton>
            <ColoredButton orange='#ff8000'>Minha formação</ColoredButton>
          </ContentButton>
        </ContentContainer>
        <ContentContainer content='flex-end'>
          <ContentTitle color='#8000ff'>As coisas que gosto de fazer</ContentTitle>
          <ContentParagraph>Atuo como desenvolvedor WEB fullstack, criando desde a aparência de aplicações até o Banco de Dados. Além disso, também atuo como Devops e como técnico em Redes! </ContentParagraph>
          <ContentButton>
            <ColoredButton purple='#8000ff'>Meus serviços</ColoredButton>
          </ContentButton>
        </ContentContainer>
      </SectionBody>
    </Section>
  )
}