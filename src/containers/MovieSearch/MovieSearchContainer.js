import React from 'react';
import { connect } from 'react-redux';
import {
  searchMovie,
  setMovieTitle,
  setAlert,
  clearMovies,
} from '../../reducers/movies';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import MovieSearch from './MovieSearch';

class MovieSearchContainer extends React.Component {
  render() {
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
    } = this.props;
    return (
      <MovieSearch
        searchedMovies={searchedMovies}
        isFetching={isFetching}
        totalPages={totalPages}
        currentPage={currentPage}
        movieTitle={movieTitle}
        searchMovie={searchMovie}
        setMovieTitle={setMovieTitle}
        setAlert={setAlert}
        clearMovies={clearMovies}
        history={history}
        isError={isError}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchedMovies: state.movies.searchedMovies,
    isFetching: state.movies.isFetching,
    totalPages: state.movies.totalPages,
    currentPage: state.movies.currentPage,
    movieTitle: state.movies.movieTitle,
    isError: state.movies.isError,
  };
};

export default compose(
  connect(mapStateToProps, {
    searchMovie,
    setMovieTitle,
    setAlert,
    clearMovies,
  }),
  withRouter
)(MovieSearchContainer);
