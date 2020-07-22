import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  button: {
    height: '200px',
    minWidth: 300,
    background: 'linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },

  imageButton: {
    width: '300px',
    color: '#fff',
    transition: 'all 0.3s',

    '&:hover': {
      width: '200px',
      padding: '15px 25px',
      borderTop: '1px solid #fff',
      borderBottom: '1px solid #fff',
    },
  },

  genreName: {
    fontFamily: 'Lato',
    fontSize: '1.6rem',
    monWidth: 320,
    transition: 'all 0.3s',
  },
}));

const Genres = ({ genres, ...props }) => {
  const classes = useStyles();
  const history = useHistory();

  const genreButtons = genres.map((genre) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={genre.id}>
        <ButtonBase
          focusRipple
          className={classes.button}
          onClick={() => {
            history.push(`/genres/${genre.name}/${genre.id}/${1}`);
          }}
        >
          <span className={classes.imageButton}>
            <Typography
              className={classes.genreName}
              component='span'
              variant='subtitle1'
              color='inherit'
            >
              {genre.name}
            </Typography>
          </span>
        </ButtonBase>
      </Grid>
    );
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid
        container
        spacing={3}
        style={{ paddingTop: '20px', maxWidth: '1300px', textAlign: 'center' }}
      >
        {genreButtons}
      </Grid>
    </div>
  );
};

export default withRouter(Genres);
