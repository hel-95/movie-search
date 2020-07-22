import React, { Fragment } from 'react';
import { LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import { setMovieGenres } from '../../reducers/movies';
import Genres from '../../components/GenresList/Genres';

class GenresContainer extends React.Component {
  componentDidMount() {
    this.props.setMovieGenres();
  }

  render() {
    const { isFetching, genres } = this.props;
    return (
      <Fragment>
        {isFetching && (
          <LinearProgress color='secondary' style={{ marginTop: '100px' }} />
        )}
        {genres.length > 0 && <Genres genres={this.props.genres} />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.movies.genres,
    isFetching: state.movies.isFetching,
  };
};

export default connect(mapStateToProps, { setMovieGenres })(GenresContainer);
