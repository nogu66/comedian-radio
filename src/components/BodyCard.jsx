import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@material-ui/core';

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
    cHeader: {
      height: '50px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '& .MultoCardHeader-content': {
        overflow: 'hidden',
      },
    },
    cContent: {
      height: '200px',
      overflow: 'hidden',
    },
  });

  function BodyCard(props) {
    // const {id, name, date, time, hp_url, station_id, twitter_hashtag, twitter_url, talents } = props;
    // const id = props.program.id;
    const program = props.name;
    // const name = props.program.name;
    // const date = props.program.date;
    // const time = props.program.time;
    // const hp_url = props.program.hp_url;
    // const station_id = props.program.station_id;
    // const twitter_hashtag = props.program.twitter_hashtag;
    // const twitter_url = props.program.twitter_url;
    // const talents = props.program.talents;

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <Card variant="outlined">
        {/* <CardMedia style={{ height: '150px' }} image={imageUrl} /> */}
        <CardMedia
          style={{ width: '300px', height:'200px' }}
          image={"https://radiko.jp/res/program/DEFAULT_IMAGE/LFR/2uvc37bx9r.png"}
          // alt={name}
        />
        <CardContent className={classes.cContent}>
          <Typography variant="h5" component="div">
            {props.program.name}
          </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          放送日時：{date} {time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          HP:{hp_url}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          放送日時：{station_id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Twitterハッシュタグ：{twitter_hashtag}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link href={twitter_url}></Link>
          Twitter
        </Typography> */}
        {/* <Typography variant="body2" color="text.secondary"> */}
        {/* {talents.map((talent) => {
          return(
            <p>
              `${talent},`
            </p>
          );
        })} */}
        {/* </Typography> */}
        </CardContent>
        <CardActions>
          {/* <Button size="small" href={`/post/${id}`}> */}
          <Button size="small" >
            詳細をみる
          </Button>
        </CardActions>
      </Card>
    );
  }

  export default BodyCard;