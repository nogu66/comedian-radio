import React, { useContext, useEffect, useState } from "react";
import List from '@material-ui/core/List';
import db from '../firebase/index';
import {Card} from './index';

function Cards(props) {
    return (
        <List>
            {props.cards.map((card, index) => {
                return <Card name={card.name} key={index.toString()}/>
            })}
        </List>
    );
}

export default Cards;