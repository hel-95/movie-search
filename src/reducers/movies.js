import { movieAPI } from '../api/api';

const SET_TOGGLE_IS_FETCHING = 'demo-movie/movies/SET_TOGGLE_IS_FETCHING';
const SET_IS_ERROR = 'demo-movie/movies/SET_IS_ERROR';
const SET_CURRENT_PAGE = 'demo-movie/movies/SET_CURRENT_PAGE';
const SET_TOTAL_PAGES = 'demo-movie/movies/SET_TOTAL_PAGES';
const SET_GENRES = 'demo-movie/movies/SET_GENRES';
const SET_MOVIES = 'demo-movie/movies/SET_MOVIES';
const SET_SEARCH_MOVIE = 'demo-movie/movies/SET_SEARCH_MOVIE';
const SET_MOVIE_TITLE = 'demo-movie/movies/SET_MOVIE_TITLE';
const SET_ALERT = 'demo-movie/movies/SET_ALERT';
const REMOVE_ALERT = 'demo-movie/movies/REMOVE_ALERT';
const CLEAR_MOVIES = 'demo-movie/movies/CLEAR_MOVIES';

const initialState = {
  movies: [],
  isFetching: false,
  isError: false,
  currentPage: 1,
  totalPages: null,
  genres: [],
  searchedMovies: null,
  movieTitle: '',
  alert: null,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: [...action.movies],
      };

    case SET_TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case SET_IS_ERROR:
      return { ...state, isError: action.isError };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_PAGES:
      return { ...state, totalPages: action.totalPages };

    case SET_GENRES:
      return {
        ...state,
        genres: [...action.genres],
      };
    case SET_SEARCH_MOVIE:
      return {
        ...state,
        searchedMovies: [...action.searchedMovies],
      };

    case SET_MOVIE_TITLE:
      return { ...state, movieTitle: action.movieTitle };

    case SET_ALERT:
      return { ...state, alert: action.alert };

    case REMOVE_ALERT:
      return { ...state, alert: null };

    case CLEAR_MOVIES:
      return { ...state, searchedMovies: [], movieTitle: '' };

    default:
      return state;
  }
};

// ------------------------------ACTION CREATOR----------------------------------//

export const setToggleIsFetching = (isFetching) => ({
  type: SET_TOGGLE_IS_FETCHING,
  isFetching,
});

export const setIsError = (isError) => ({ type: SET_IS_ERROR, isError });

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalPages = (totalPages) => ({
  type: SET_TOTAL_PAGES,
  totalPages,
});

const setGenres = (genres) => ({ type: SET_GENRES, genres });

const setMovies = (movies) => ({ type: SET_MOVIES, movies });

const setSearchMovie = (searchedMovies) => ({
  type: SET_SEARCH_MOVIE,
  searchedMovies,
});

export const setMovieTitle = (movieTitle) => ({
  type: SET_MOVIE_TITLE,
  movieTitle,
});

const setAlertMsg = (alert) => ({ type: SET_ALERT, alert });

//-------------------------------Thunk Creator--------------------------------//
const requestMovie = async (
  page,
  dispatch,
  apiMethod,
  actionCreator,
  adParam = ''
) => {
  dispatch(setToggleIsFetching(true));
  dispatch(setCurrentPage(page));
  try {
    let data = await apiMethod(page, adParam);
    let movies = data.results;
    dispatch(setToggleIsFetching(false));
    dispatch(actionCreator(movies));
    dispatch(setTotalPages(data.total_pages));
  } catch (err) {
    dispatch(setIsError(true));
  }
};

export const setUpcomingMovies = (page = 1) => async (dispatch) => {
  requestMovie(
    page,
    dispatch,
    movieAPI.getUpcomingMovie.bind(movieAPI),
    setMovies
  );
};

export const setNowPlayingMovies = (page = 1) => async (dispatch) => {
  requestMovie(
    page,
    dispatch,
    movieAPI.getNowplayingMovie.bind(movieAPI),
    setMovies
  );
};

export const setPopularMovies = (page = 1) => async (dispatch) => {
  requestMovie(
    page,
    dispatch,
    movieAPI.getPopularMovie.bind(movieAPI),
    setMovies
  );
};

export const setMovieGenres = () => async (dispatch) => {
  dispatch(setToggleIsFetching(true));
  try {
    let genres = await movieAPI.getMovieGenres();
    dispatch(setToggleIsFetching(false));
    dispatch(setGenres(genres));
  } catch (err) {
    dispatch(setIsError(true));
  }
};

export const setMoviesByGenre = (genreId, page = 1) => async (dispatch) => {
  requestMovie(
    page,
    dispatch,
    movieAPI.getMovieByGenre.bind(movieAPI),
    setMovies,
    genreId
  );
};

export const searchMovie = (name, page = 1) => async (dispatch) => {
  requestMovie(
    page,
    dispatch,
    movieAPI.getSearchedMovie.bind(movieAPI),
    setSearchMovie,
    name
  );
};

export const setAlert = (alert) => (dispatch) => {
  dispatch(setAlertMsg(alert));
  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
};

export const clearMovies = () => (dispatch) => {
  dispatch({ type: CLEAR_MOVIES });
};

export default movies;
