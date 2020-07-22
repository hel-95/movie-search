import React, { Fragment } from 'react';
import { Card, CardMedia, LinearProgress, Typography } from '@material-ui/core';
import { MOVIE_TRAILER } from '../../../constants/constants';
import classes from './Video.module.scss';

const Video = ({ trailer }) => {
  if (!trailer) {
    return <LinearProgress />;
  }

  return (
    <Fragment>
      <Typography variant='h6' style={{ padding: '20px 20px' }}>
        Trailer
      </Typography>
      <Card>
        <CardMedia
          title='Movie trailer'
          component='div'
          style={{ margin: '0 auto', maxWidth: '800px' }}
        >
          {trailer.length > 0 && <MovieTrailer url={trailer[0].key} />}
        </CardMedia>
      </Card>
    </Fragment>
  );
};

const MovieTrailer = ({ url }) => {
  return (
    <div className={classes.container}>
      <iframe
        title='Movie Trailer'
        className={classes.video}
        src={`${MOVIE_TRAILER}${url}`}
      ></iframe>
    </div>
  );
};

export default Video;
