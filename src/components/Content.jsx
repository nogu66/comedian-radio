import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { db } from "../firebase/index";
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core/Typography';
import { Card } from './index';
import { Grid } from '@material-ui/core';
import BodyCard from './BodyCard';

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

  function Content() {
    const [programs, setPrograms] = useState([]);
    // const [programs, setPrograms] = useState([]);
    const list = [];

    useEffect(() => {
        db.collection('radioPrograms').get().then((snapshots) => {
            const list = [];
            snapshots.forEach((doc) => {
                const data = doc.data();
                // console.log(data);
                list.push({
                    id: doc.id,
                    name: data.name,
                    date: data.date,
                    time: data.time,
                    hp_url: data.hp_url,
                    station_id: data.station_id,
                    twitter_hashtag: data.twitter_hashtag,
                    twitter_url: data.twitter_url,
                    talnets: data.talents,
                })
            })
            setPrograms(list);
        })
    }, []);

    return (
        <section>
            <ul>
                <div>
                    {/* <p>{programs}</p> */}
                    {/* {list.map((item, index) => {
                        return (
                            <Grid contaier spacing={2}>
                                <div></div>
                            </Grid>
                        );
                    })} */}
                    {programs.map((program, index) => {
                        return (
                            <Grid container spacing={2}>
                                {/* <BodyCard card={program}/> */}
                                <BodyCard program={program}/>
                            </Grid>
                        );
                    })}
                </div>
            </ul>
        </section>
    );

  };

  export default Content;