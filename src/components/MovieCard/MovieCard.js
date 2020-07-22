import React from 'react';
import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NO_IMAGE, BASE_POSTER_PATH } from '../../constants/constants';
import { formatDate } from '../../utils/helper';

const useStyles = makeStyles({
  root: {
    maxWidth: '280px',
    margin: '10px',
  },
  media: {
    width: '100%',
  },
  butBase: {
    display: 'inline-block',
  },
  poster: {
    width: '280px',
    height: '420px',
  },
  noImage: {
    height: '420px',
    width: '280px',
    backgroundImage: `url( ${NO_IMAGE})`,
    backgroundSize: 'contain',
  },
});

const MovieCard = ({ movie, history }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ButtonBase
        onClick={() => history.push('/movie/' + movie.id)}
        className={classes.butBase}
      >
        <CardMedia
          component='img'
          className={movie.poster_path ? classes.poster : classes.noImage}
          src={
            movie.poster_path != null
              ? `${BASE_POSTER_PATH}/w300${movie.poster_path}`
              : null
          }
        />

        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
            {movie.title}
          </Typography>
          <Typography variant='subtitle1'>
            {formatDate(movie.release_date)}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  );
};

export default MovieCard;
