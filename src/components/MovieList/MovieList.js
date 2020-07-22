import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = (props) => {
  const { movies, totalPages, currentPage, history, title, isError } = props;

  let movieCards = movies.map((movie) => {
    return (
      <Grid
        key={movie.id}
        container
        item
        spacing={1}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        style={{ justifyContent: 'center' }}
      >
        <MovieCard key={movie.id} movie={movie} history={history} />
      </Grid>
    );
  });

  const handleChangePage = (event, newPage) => {
    props.onPageChanged(newPage);
  };

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
      {isError && (
        <h3 style={{ marginLeft: '20px' }}>
          Woops,something went wrong trying to fetch movies
        </h3>
      )}
      <div>
        <Typography
          variant='h4'
          style={{ textAlign: 'center', padding: '10px', right: '50%' }}
        >
          {title}
        </Typography>
      </div>
      <Grid container spacing={2} style={{ justifyContent: 'center' }}>
        {movieCards}
      </Grid>

      {totalPages > 1 ? (
        <Pagination
          color='secondary'
          size='large'
          component='div'
          count={totalPages}
          page={currentPage}
          onChange={handleChangePage}
        />
      ) : null}
    </div>
  );
};

export default MovieList;
