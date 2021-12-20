import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import useMedia from 'use-media';

const useStyles = makeStyles({
  card: {
    marginTop: '20px',
  },
  cMedia: {
    height: '200px',
    weight: 'max-width',
    // paddingTop: '56.25%',
    // marginTop: '20px',
  },
  Content: {
    overflow: 'hidden',
  },
  cColor: {
    // fontWeight:'bold',
    color: '#666666',
  },
});

function DetailCard(props) {
  const {
    name,
    date,
    time,
    hp_url,
    station_id,
    twitter_hashtag,
    twitter_url,
    talents,
  } = props;
  const isWide = useMedia({ minWidth: '742px' });
  const isMinWidth = useMedia({ minWidth: '600px' });

  const existTwitter = !twitter_url;
  const existHp = !hp_url;

  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item container className={classes.card}>
        <Grid sm={isWide ? 6 : 6}>
          {/* <Card>
            <CardMedia
              style={{ weight: 'max-width' }}
              image={
                'https://radiko.jp/res/program/DEFAULT_IMAGE/LFR/2uvc37bx9r.png'
              }
              className={classes.cMedia}
            />
          </Card> */}
          <img
            src={
              'https://radiko.jp/res/program/DEFAULT_IMAGE/LFR/2uvc37bx9r.png'
            }
            alt={name}
            className={classes.cMedia}
          />
        </Grid>
        <Grid sm={isWide ? 6 : 6}>
          <div className={classes.Content}>
            <h5>{name}</h5>
            <p>
              `放送日時:{date}
              {time}`
            </p>
            <p>`放送局：{station_id}`</p>
            <p>`Twitterハッシュタグ{twitter_hashtag}`</p>
            {/* {existHp ? <Link to={hp_url}>HP</Link> : null} */}
            {/* {existTwitter ? <Link to={twitter_url}>Twitter</Link> : null} */}
            <p>{talents}</p>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DetailCard;
