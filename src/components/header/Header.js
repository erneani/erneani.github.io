import React from 'react';
import { Block } from '../block/Block';
import Image from '../image/Image';

import './header.scss';

export default class Header extends React.Component {
    render() {
        return(
            <div className="header">
                <Block className="header-brand">
                    <Image source="Erneani light logo.png" alt="Vinícius Ernani brand"/>
                </Block>
            </div>
        )
    }
}