import React from 'react';
import { Block } from '../block/Block';
import { Image } from '../image/Image';
import { Navbar } from '../navbar/Navbar';
import { NavbarList } from '../navbar-list/NavbarList';
import { Label } from '../label/Label';
import { CallButton } from '../call-button/CallButton';

import './header.scss';

export default class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pageScrolled: false,
      }
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      if (window.scrollY > 0) {
            this.setState({
                pageScrolled: true,
            })
        }
        else if (window.scrollY <= 0) {
            this.setState({
                pageScrolled: false,
            })
        }
    }

    render() {
        return(
            <div className={"header"+(this.state.pageScrolled?" header-moved":"")}>
                <Block className="header-brand">
                    <Image source="Erneani light logo.png" alt="Vinícius Ernani brand"/>
                    <Label label="V. Ernani" className="header-brand-title"/>
                </Block>
                <Navbar>
                  <NavbarList />
                  <CallButton href="#" label="Contato"/>
                </Navbar>
            </div>
        )
    }
}
