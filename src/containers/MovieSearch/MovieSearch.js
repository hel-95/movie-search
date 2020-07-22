import React, { useState, Fragment } from 'react';
import {
  InputBase,
  Paper,
  IconButton,
  Button,
  LinearProgress,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import MovieList from '../../components/MovieList/MovieList';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '408px',
    [theme.breakpoints.down('xs')]: {
      width: '370px',
    },
  },

  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '0 auto',
    marginTop: '15px',
    marginBottom: '30px',

    [theme.breakpoints.down('xs')]: {
      width: '360px',
    },
  },
}));

const MovieSearch = (props) => {
  const classes = useStyles();
  const [currentSearch, setCurrentSearch] = useState(props.movieTitle);
  const {
    searchedMovies,
    isFetching,
    totalPages,
    currentPage,
    movieTitle,
    searchMovie,
    setMovieTitle,
    setAlert,
    clearMovies,
    history,
    isError,
  } = props;

  const onMovieTitleChange = (e) => {
    e.preventDefault();
    setCurrentSearch(e.currentTarget.value);
  };

  const searchMovieByTitle = () => {
    if (currentSearch === '') {
      setAlert('Please enter something');
    } else {
      setMovieTitle(currentSearch);
      searchMovie(currentSearch);
    }
  };

  const onPageChanged = (pageNumber) => {
    searchMovie(currentSearch, pageNumber);
    history.push(`/search/${pageNumber}`);
  };

  const onClearMovies = () => {
    clearMovies();
    history.push('/search');
    setCurrentSearch('');
  };

  return (
    <Fragment>
      <Paper component='form' className={classes.root}>
        <InputBase
          style={{ flex: 1 }}
          fullWidth
          placeholder='Search for a movie'
          inputProps={{ 'aria-label': 'search for a movie' }}
          value={currentSearch}
          onChange={onMovieTitleChange}
        />

        <IconButton
          style={{ padding: 10 }}
          color='primary'
          aria-label='search'
          onClick={searchMovieByTitle}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {isFetching && (
        <LinearProgress color='secondary' style={{ marginTop: '100px' }} />
      )}
      {isError && (
        <h3 style={{ marginLeft: '20px' }}>
          Woops,something went wrong trying to fetch movies
        </h3>
      )}
      {searchedMovies && searchedMovies.length === 0 && movieTitle && (
        <h3 style={{ marginLeft: '20px' }}>
          There are no movies that matched your query
        </h3>
      )}
      {searchedMovies && searchedMovies.length > 0 && (
        <Fragment>
          <div
            style={{
              textAlign: 'center',
              marginTop: '-20px',
              marginBottom: '20px',
            }}
          >
            <Button
              variant='contained'
              color='secondary'
              onClick={onClearMovies}
              className={classes.button}
            >
              Clear
            </Button>
          </div>
          <MovieList
            totalPages={totalPages}
            currentPage={currentPage}
            movies={searchedMovies}
            onPageChanged={onPageChanged}
            {...props}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default MovieSearch;
