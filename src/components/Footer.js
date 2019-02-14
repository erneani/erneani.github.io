import React from 'react';
import styled from 'styled-components';
import logo from '../images/Erneani light logo.png'

const FooterContainer = styled.div`
    background-color: rgba(128,0,255,1);
    flex-direction: column;
    padding-top: 3rem;
    display: flex;
`;

const ContactColumn = styled.div`
    flex-direction: column;
    font-family: 'Open Sans', sans serif;
    margin: 0 auto;
    color: #fff;
`;

const ContactTitle = styled.h3`
    text-align: center;
    font-weight: 800;
    font-size: 50px;
    margin: 0;
    color: #fff;
`;

const ContactText = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    margin: 2rem 0;
    color: #fff;
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
        color: #fff;

        transition: 0.25s ease-in;

        &:hover {
            color: #ff8000;
        }
    }
`;

const FooterBar = styled.div`
    justify-content: center;
    flex-direction: row;
    border-top: 1px solid #fff;
    display: flex;
    padding: 1rem 2rem 3rem;
    margin: 5rem auto 0;
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
    color: #fff;
`;

export const Footer = () => {
    return(
        <FooterContainer id="contact">
            <ContactColumn>
                <ContactTitle>Contate-me</ContactTitle>
                <ContactText>
                    Que tal falarmos sobre seus projetos?
                </ContactText>
                <ContactItem>+55 (84) 99147-9189</ContactItem>
                <ContactItem>viniciusernanicarvalho@gmail.com</ContactItem>
                <ContactList>
                    <ListItem><a href="https://erneani.github.io" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></ListItem>
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