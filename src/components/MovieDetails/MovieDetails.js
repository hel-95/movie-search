import React from 'react';
import { Container, Typography } from '@material-ui/core';
import style from './MovieDetails.module.scss';
import Reviews from './Reviews/Reviews';
import Video from './Video/Video';
import Recommendations from './Recommendations/Recommendations';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  BASE_POSTER_PATH,
  BASE_BACKDROP_PATH,
} from '../../constants/constants';
import { formatter } from '../../utils/helper';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '0',
    paddingRight: '0',
  },
  tagline: {
    fontFamily: 'Tenali Ramakrishna',
    color: '#c6ff00',
    fontSize: '1.7em',
    lineHeight: 1.2,
  },
  arrowBack: {
    width: '1.7em',
    height: '1.7em',
    color: '#fff',
  },
  wrapper: {
    background: 'rgba(0, 0, 0, .55)',
    padding: '30px 0 30px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '5px 0 30px 0',
    },
  },
}));

const MovieDetail = ({ movie, reviews, trailer, recommendations, history }) => {
  const classes = useStyles();
  let backgroundUrl;

  if (movie.backdrop_path) {
    backgroundUrl = `${BASE_BACKDROP_PATH}${movie.backdrop_path}`;
  } else {
    backgroundUrl = `linear-gradient(to right, #0f2027, #203a43, #2c5364)`;
  }

  const posterUrl = `${BASE_POSTER_PATH}/w300${movie.poster_path}`;

  return (
    <div>
      <Container
        maxWidth='xl'
        className={classes.root}
        style={{
          background: `url(${backgroundUrl}) no-repeat right 0 top / cover`,
        }}
      >
        <Typography component='div' className={classes.wrapper}>
          <div className={style.arrow} onClick={() => history.goBack()}>
            <ArrowBackIcon className={classes.arrowBack} />
          </div>
          <div className={style.container}>
            <div className={style.posterWrapper}>
              {movie.poster_path && <img src={posterUrl} alt='poster' />}
            </div>
            <div className={style.infoWrapper}>
              <div>
                <Typography variant='h4'>{movie.title}</Typography>
                <Typography className={classes.tagline} variant='subtitle2'>
                  {movie.tagline}
                </Typography>
              </div>
              <div>
                <p>{movie.overview}</p>
              </div>
              <div className={style.details}>
                <div style={{ marginBottom: '5px' }}>
                  <span className={style.info}>
                    {movie.genres && movie.genres.map((g) => g.name).join(', ')}
                  </span>
                  <span className={style.subtitle}>
                    {movie.production_companies &&
                      movie.production_companies.map((c) => c.name).join(', ')}
                  </span>
                </div>
                <div className={style.additional}>
                  <div>
                    <span className={style.subtitle}>Original release:</span>
                    <span className={style.info}>{movie.release_date}</span>
                  </div>

                  <div>
                    <span className={style.subtitle}>Budget:</span>
                    <span className={style.info}>
                      {movie.budget > 0 ? formatter.format(movie.budget) : '-'}
                    </span>
                  </div>

                  <div>
                    <span className={style.subtitle}>Running Time:</span>
                    <span className={style.info}>{movie.runtime} min.</span>
                  </div>

                  <div>
                    <span className={style.subtitle}> Vote Average:</span>
                    <span className={style.info}>{movie.vote_average}/10 </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Typography>
      </Container>

      <Container maxWidth='xl' className={classes.root}>
        <Reviews reviews={reviews} />
        <Video trailer={trailer} />
        <Recommendations recommendations={recommendations} />
      </Container>
    </div>
  );
};

export default MovieDetail;
