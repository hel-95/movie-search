import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import { setMoviesByGenre } from '../../reducers/movies';
import MovieList from '../../components/MovieList/MovieList';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.setMoviesByGenre();
  }

  render() {
    return (
      <Fragment>
        {this.props.isFetching ? (
          <LinearProgress color='secondary' style={{ marginTop: '100px' }} />
        ) : (
          <MovieList
            movies={this.props.popularMovies}
            history={this.props.history}
            title={'Top 20 Movies'}
            isError={this.props.isError}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularMovies: state.movies.movies,
    isFetching: state.movies.isFetching,
    isError: state.movies.isError,
  };
};

export default compose(
  connect(mapStateToProps, { setMoviesByGenre }),
  withRouter
)(MainPage);
