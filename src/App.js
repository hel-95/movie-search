import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import NowPlaying from './containers/NowPlaying/NowPlaying';
import ComingSoon from './containers/ComingSoon/ComingSoon';
import Navbar from './components/Header/Navbar';
import GenresContainer from './containers/Genres/GenresContainer';
import MovieDetailsContainer from './components/MovieDetails/MovieDetailsContainer';
import GenreList from './components/GenresList/GenreList';
import MovieSearch from './containers/MovieSearch/MovieSearchContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import NotFound from './components/Page/NotFound';
import AlertContainer from './components/layout/AlertContainer';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <AlertContainer />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/comingsoon/:page?' component={ComingSoon} />
          <Route exact path='/nowplaying/:page?' component={NowPlaying} />
          <Route
            exact
            path='/movie/:movieId'
            component={MovieDetailsContainer}
          />
          <Route
            exact
            path='/genres/:genreName/:genreId/:page?'
            component={GenreList}
          />
          <Route exact path='/genres' component={GenresContainer} />
          <Route exact path='/search/:page?' component={MovieSearch} />
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
