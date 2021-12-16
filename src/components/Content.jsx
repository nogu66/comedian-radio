import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { db } from '../firebase/index';
import useMedia from 'use-media';
import { Grid } from '@material-ui/core';
import BodyCard from './BodyCard';

const useStyles = makeStyles({
  contents: {
    marginTop: '20px',
  },
  smallContents: {
    marginTop: '20px',
    padding: '0 20px',
  },
});

function Content() {
  const classes = useStyles();
  const [programs, setPrograms] = useState([]);
  const isWide = useMedia({ minWidth: '742px' });
  const isMinWidth = useMedia({ minWidth: '600px' });
  useEffect(() => {
    db.collection('radioPrograms')
      .get()
      .then((snapshots) => {
        const programs = [];
        snapshots.forEach((doc) => {
          const data = doc.data();
          // console.log(data);
          programs.push({
            id: doc.id,
            name: data.name,
            date: data.date,
            time: data.time,
            hp_url: data.hp_url,
            station_id: data.station_id,
            twitter_hashtag: data.twitter_hashtag,
            twitter_url: data.twitter_url,
            talnets: data.talents,
          });
        });
        setPrograms(programs);
      });
  }, []);

  return (
    <Grid
      container
      spacing={1}
      className={isMinWidth ? classes.contents : classes.smallContents}
    >
      {programs.map((program, index) => {
        return (
          <Grid item xs={isMinWidth ? 12 : 6} sm={isWide ? 4 : 6}>
            <BodyCard program={program} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Content;
