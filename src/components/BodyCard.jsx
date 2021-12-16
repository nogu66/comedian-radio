import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cMedia: {
      height: 0,
      paddingTop: '56.25%',
    },
    cContent: {
      height: '50px',
      overflow: 'hidden',
    },
    cColor:{
      // fontWeight:'bold',
      color:'#666666'
    }
  });

  function BodyCard(props) {
    // const {id, name, date, time, hp_url, station_id, twitter_hashtag, twitter_url, talents } = props;
    const name = props.program.name;

    const classes = useStyles();
    return (
      <Card variant="outlined" className={classes.card}>
        {/* <CardMedia style={{ height: '150px' }} image={imageUrl} /> */}
        <CardMedia
          style={{height:'10px' }}
          image={"https://radiko.jp/res/program/DEFAULT_IMAGE/LFR/2uvc37bx9r.png"}
          // alt={name}
          className={classes.cMedia}
        />
        <CardContent className={classes.cContent}>
          <Typography variant="body1" component="p" className={classes.cColor}>
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small" href={`/post/${id}`}> */}
          <Button size="small" className={classes.cColor} >
            詳細をみる
          </Button>
        </CardActions>
      </Card>
    );
  }

  export default BodyCard;