import React from 'react';
import styled from 'styled-components';
import logo from '../images/Erneani light logo.png';
import { CallButton } from '../styles/Variables';

const HeaderContainer = styled.div`
  justify-content: space-around;
  font-family: 'Open Sans', sans-serif;
  position: fixed;
  z-index: 5;
  display: flex;
  width: 100%;
  
  transition: 0.6s all;

  background-color: ${props => props.backgroundColor};
  height: ${props => props.height};
`;

const HeaderBrand = styled.div`
  display: flex;
  margin: auto 0;
`;

const HeaderImage = styled.img`
  max-height: 80px;
  height: ${props => props.height};

  transition: 0.6s all;
`;

const HeaderBrandLabel = styled.label`
  border-left: 2px solid #fff;
  font-size: 20px;
  padding: 0 0.5rem; 
  margin: auto 0.5rem;
  color: #fff;
`;

const HeaderNavbar = styled.ul`
  list-style: none;
  display: flex;
  margin: auto 0;

  transition: 0.3s all;

  @media screen and (max-width: 768px) {
    background-color: rgba(12,12,12,0.8);
    flex-direction: column;
    padding: 100px 0 1rem 0;
    position: absolute;
    display: flex;
    opacity: 0;
    left: 0;
    width: ${window.innerWidth}px;
  }
`;

const NavbarItem = styled.a`
  text-decoration: none;
  border-bottom: 2px dashed transparent;
  font-size: 20px;
  margin: auto 0;
  cursor: pointer;
  color: #fff;

  transition: 0.3s all;

  &:hover {
    border-bottom: 2px dashed #ff8000;
    color: #ff8000;
  }

  @media screen and (max-width:768px) {
    margin: 0.5rem auto;
  }
`;

const MenuIcon = styled.label`
  font-size: 36px;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  margin: auto 0;
  color: #fff;

  transition: 0.5s all;

  &:hover {
    color: #d9d9d9;
  }

  @media screen and (max-width: 768px) {
    left: 0;
    position: relative;
    opacity: 1;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarItens: [
        { label:'Sobre mim', id:'#about' },
      ],
      pageScroll: false,
      menuShow: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if(window.scrollY >= 1) {
      this.setState({
        pageScroll: true,
      });
    }
    else {
      this.setState({
        pageScroll: false,
      })
    }
  }

  handleMenu = () => {
    console.log('clicked');
    const navbar = document.querySelector('#navbar');
    if(this.state.menuShow === false) {
      navbar.style.opacity = 1;
      this.setState({
        menuShow: !this.state.menuShow,
      });
    }
    else {
      navbar.style.opacity = 0;
      this.setState({
        menuShow: !this.state.menuShow,
      });
    }
  }

  handleGoTo = (id, duration) => {
    const element = document.querySelector(`${id}`);
    window.scrollTo(window.innerHeight,element.offsetTop-102);
  }

  render () {
    const { pageScroll, navbarItens } = this.state;
    return (
      <HeaderContainer 
        backgroundColor={ pageScroll?'rgba(12,12,12,0.8)':'transparent' }
        height={ pageScroll?'70px':'100px'}
        >
        <HeaderBrand>
          <HeaderImage src={ logo } height={ pageScroll?'50px':'80px' }/>
          <HeaderBrandLabel>V.Ernani</HeaderBrandLabel>
        </HeaderBrand>
        <HeaderNavbar id="navbar">
          { navbarItens.map(item => {
            return <NavbarItem key={item.index} onClick={() => this.handleGoTo(item.id,2)}>{ item.label }</NavbarItem>
          }) }
          <CallButton href='https://github.com/erneani' target='_blank'>Contato</CallButton>
        </HeaderNavbar>
        <MenuIcon onClick={this.handleMenu}>
          <i className="fas fa-caret-square-down"></i>
        </MenuIcon>
      </HeaderContainer>
    )
  }
}