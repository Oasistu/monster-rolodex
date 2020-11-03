import React from 'react';
import { render } from 'react-dom';
import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => {
    return(
        <div className='card-list'>
            {props.monsters.map(monster => {
                return (
                    <Card key={monster.id} monster={monster} />
                )
            })}
        </div>
    );
}