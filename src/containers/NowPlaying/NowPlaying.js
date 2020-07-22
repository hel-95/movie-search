import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import { setNowPlayingMovies } from '../../reducers/movies';
import MovieList from '../../components/MovieList/MovieList';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class NowPlaying extends React.Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    const p = parseInt(page, 10);
    this.props.setNowPlayingMovies(p);
  }

  onPageChanged = (pageNumber) => {
    const { setNowPlayingMovies, history } = this.props;
    setNowPlayingMovies(pageNumber);
    history.push(`/nowplaying/${pageNumber}`);
  };

  render() {
    const { totalPages, currentPage, nowPlayingMovies, isError } = this.props;
    return (
      <Fragment>
        {this.props.isFetching && (
          <LinearProgress color='secondary' style={{ marginTop: '100px' }} />
        )}

        <MovieList
          totalPages={totalPages}
          currentPage={currentPage}
          movies={nowPlayingMovies}
          onPageChanged={this.onPageChanged}
          title={'Now Playing'}
          isError={isError}
          {...this.props}
        />
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    nowPlayingMovies: state.movies.movies,
    isFetching: state.movies.isFetching,
    isError: state.movies.isError,
    totalPages: state.movies.totalPages,
    currentPage: state.movies.currentPage,
  };
};

export default compose(
  connect(mapStateToProps, { setNowPlayingMovies }),
  withRouter
)(NowPlaying);
