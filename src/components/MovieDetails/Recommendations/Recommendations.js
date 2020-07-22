import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import {
  ButtonBase,
  GridList,
  GridListTile,
  GridListTileBar,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import { BASE_POSTER_PATH, NO_IMAGE } from '../../../constants/constants';

const Recommendations = ({ recommendations }) => {
  const history = useHistory();

  if (!recommendations) {
    return <LinearProgress />;
  }

  let recommendedFilms;

  if (recommendations.length > 0) {
    let copy = [...recommendations];
    recommendedFilms = copy.splice(0, 10);
  }

  return (
    <Fragment>
      <Typography variant='h6' style={{ padding: '20px' }}>
        Recommendations
      </Typography>

      {recommendedFilms && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            paddingBottom: '30px',
          }}
        >
          <GridList
            cols={2.5}
            style={{ flexWrap: 'nowrap', transform: 'translateZ(0)' }}
          >
            {recommendedFilms.map((movie) => {
              return (
                <ButtonBase
                  style={{ width: '100%' }}
                  key={movie.id}
                  onClick={() => history.push('/movie/' + movie.id)}
                >
                  <GridListTile
                    key={movie.title}
                    style={{ width: '250px', height: '180px' }}
                  >
                    <img
                      src={
                        movie.poster_path != null
                          ? `${BASE_POSTER_PATH}/w300${movie.poster_path}`
                          : `${NO_IMAGE}`
                      }
                      alt={movie.title}
                      style={{ paddingTop: '90px' }}
                    />
                    <GridListTileBar title={movie.title} />
                  </GridListTile>
                </ButtonBase>
              );
            })}
          </GridList>
        </div>
      )}
    </Fragment>
  );
};

export default Recommendations;
