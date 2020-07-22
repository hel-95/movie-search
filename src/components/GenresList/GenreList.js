import React, { Fragment } from 'react';
import { LinearProgress, Typography } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setMoviesByGenre } from '../../reducers/movies';
import MovieList from '../MovieList/MovieList';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import classes from './Genre.module.scss';

class GenreList extends React.Component {
  refreshMovies() {
    let { genreId, page } = this.props.match.params;
    const p = parseInt(page, 10);
    if (genreId) {
      this.props.setMoviesByGenre(genreId, p);
    }
  }

  componentDidMount() {
    this.refreshMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.match.params.genreId !== prevProps.match.params.genreId ||
      this.props.match.params.page !== prevProps.match.params.page
    ) {
      this.refreshMovies();
    }
  }

  onPageChanged = (pageNumber) => {
    let { genreId, genreName } = this.props.match.params;
    this.refreshMovies();
    this.props.history.push(`/genres/${genreName}/${genreId}/${pageNumber}`);
  };

  render() {
    return (
      <Fragment>
        {this.props.isFetching && <LinearProgress color='secondary' />}

        <div className={classes.genreNameContainer}>
          <div
            onClick={() => this.props.history.push('/genres')}
            className={classes.arrow}
          >
            <ArrowBackIcon style={{ width: '1.5em', height: '1.5em' }} />
          </div>

          <Typography
            variant='h4'
            style={{ textAlign: 'center', paddingTop: '10px' }}
          >
            {this.props.match.params.genreName}
          </Typography>
        </div>
        <MovieList
          totalPages={this.props.totalPages}
          currentPage={this.props.currentPage}
          movies={this.props.nowPlayingMovies}
          onPageChanged={this.onPageChanged}
          {...this.props}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    isFetching: state.movies.isFetching,
    isError: state.movies.isError,
    totalPages: state.movies.totalPages,
    currentPage: state.movies.currentPage,
  };
};

export default compose(
  connect(mapStateToProps, { setMoviesByGenre }),
  withRouter
)(GenreList);
