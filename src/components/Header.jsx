import React from 'react';
import {AppBar, Toolbar, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex:1,
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    芸人ラジオ
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;