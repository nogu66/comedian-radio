import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { db } from '../firebase/index';
import { DetailCard } from './index';

function DetailContent() {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    db.collection('radioPrograms')
      .doc(id)
      .get()
      .then((res) => {
        setItem(res.data());
      });
    // db.collection('radioPrograms')
    //   .doc(parseInt({ id }))
    //   .get()
    //   .then((res) => {
    //     setItem(res.data);
    //   });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} key={item.id}>
        <DetailCard {...item} />
      </Grid>
    </Grid>
  );
}

export default DetailContent;
