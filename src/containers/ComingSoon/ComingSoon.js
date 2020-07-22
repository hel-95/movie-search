import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { LinearProgress } from '@material-ui/core';
import { setUpcomingMovies } from '../../reducers/movies';
import MovieList from '../../components/MovieList/MovieList';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

class ComingSoon extends React.Component {
  componentDidMount() {
    const { page } = this.props.match.params;
    const p = parseInt(page, 10);
    this.props.setUpcomingMovies(p);
  }

  onPageChanged = (pageNumber) => {
    const { setUpcomingMovies, history } = this.props;
    setUpcomingMovies(pageNumber);
    history.push(`/comingsoon/${pageNumber}`);
  };

  render() {
    const {
      totalPages,
      currentPage,
      upcomingMovies,
      history,
      isError,
    } = this.props;
    return (
      <Fragment>
        {this.props.isFetching && (
          <LinearProgress color='secondary' style={{ marginTop: '100px' }} />
        )}

        <MovieList
          totalPages={totalPages}
          currentPage={currentPage}
          movies={upcomingMovies}
          title={'Coming Soon'}
          onPageChanged={this.onPageChanged}
          history={history}
          isError={isError}
        />
      </Fragment>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    upcomingMovies: state.movies.movies,
    isFetching: state.movies.isFetching,
    isError: state.movies.isError,
    totalPages: state.movies.totalPages,
    currentPage: state.movies.currentPage,
  };
};

export default compose(
  connect(mapStateToProps, { setUpcomingMovies }),
  withRouter
)(ComingSoon);
