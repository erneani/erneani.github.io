import React from 'react';
import styled from 'styled-components';
import logo from '../images/erneani_purple.png'

const FooterContainer = styled.div`
    background-color: rgba(255,255,255,0.6);
    flex-direction: column;
    padding: 0;
    display: flex;
`;

const ContactColumn = styled.div`
    flex-direction: column;
    font-family: 'Open Sans', sans serif;
    margin: 0 auto;
    color: #454545;
`;

const ContactTitle = styled.h3`
    text-align: center;
    font-weight: 800;
    font-size: 42px;
    margin: 0;
    color: #8000ff;
`;

const ContactText = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    margin: 2rem 0;
    color: #ff8000;
`;

const ContactItem = styled.h5`
    font-weight: 400;
    text-align: center;
    font-size: 18px;
    margin: 0.75rem 0;
`;

const ContactList = styled.ul`
    justify-content: space-evenly;
    list-style: none;
    display: inline-flex;
    padding: 0;
    margin: 1rem auto;
    width: 100%;
`;

const ListItem = styled.li`
    font-size: 36px;

    a {
        color: #454545;
    }
`;

const FooterBar = styled.div`
    background-color: #fff;
    justify-content: center;
    flex-direction: row;
    border-top: 1px solid #8000ff;
    display: flex;
    padding: 1rem 2rem 3rem;
    margin: 3rem auto 0;
    width: 50%;
`;

const FooterBarImage = styled.img`
    max-height: 40px;
`;

const FooterBarName = styled.div`
    font-family: "Open sans", sans serif;
    border-left: 1px solid #454545;
    font-weight: 400;
    padding-left: 0.5rem;
    margin: auto 0.5rem;
    color: #454545;
`;

export const Footer = () => {
    return(
        <FooterContainer>
            <ContactColumn>
                <ContactTitle>Contate-me</ContactTitle>
                <ContactText>
                    Que tal falarmos sobre seus projetos?
                </ContactText>
                <ContactItem>+55 (84) 99147-9189</ContactItem>
                <ContactItem>viniciusernanicarvalho@gmail.com</ContactItem>
                <ContactList>
                    <ListItem><a href="https://erneani.github.io" target="_blank"><i class="fab fa-github"></i></a></ListItem>
                    {/*<ListItem><a href="#"><i className="fab fa-linkedin"></i></a></ListItem> */}
                    {/*<ListItem><a href="#"><i className="fab fa-medium"></i></a></ListItem> */}
                </ContactList>
            </ContactColumn>
            <FooterBar>
                <FooterBarImage src={logo} />
                <FooterBarName>
                     Vinícius Ernani
                </FooterBarName>
            </FooterBar>
        </FooterContainer>
    );
}