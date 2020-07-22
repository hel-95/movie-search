import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getMovieDetail } from '../../reducers/movieDetails';
import MovieDetails from './MovieDetails';
import { LinearProgress } from '@material-ui/core';

class MovieDetailContainer extends React.Component {
  refreshMovie() {
    let movieId = +this.props.match.params.movieId;
    if (movieId) {
      this.props.getMovieDetail(movieId);
    }
  }

  componentDidMount() {
    this.refreshMovie();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
      this.refreshMovie();
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.isFetching && (
          <LinearProgress color='secondary' style={{ marginTop: '100px' }} />
        )}
        {Object.keys(this.props.movieDetail).length > 0 && (
          <MovieDetails
            movie={this.props.movieDetail}
            reviews={this.props.reviews}
            trailer={this.props.trailer}
            recommendations={this.props.recommendations}
            history={this.props.history}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieDetail: state.movieDetails.movieDetail,
    isFetching: state.movieDetails.isFetching,
    reviews: state.movieDetails.reviews,
    trailer: state.movieDetails.trailer,
    recommendations: state.movieDetails.recommendations,
  };
};

export default compose(
  connect(mapStateToProps, { getMovieDetail }),
  withRouter
)(MovieDetailContainer);
