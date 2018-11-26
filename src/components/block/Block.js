import React from 'react';

import './block.scss';

export const Block = (props) => {
    return (
        <div className={"block "+props.className}>
            {props.children}
        </div>
    )
}