import React from 'react';
import ListItem from '@material-ui/core/ListItem';

function Card(props) {
    return(
        <ListItem>
            <div>{props.card.name}</div>
        </ListItem>
    );
}

export default Card;