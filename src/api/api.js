import * as axios from 'axios';
import { BASE_URL, API_KEY } from '../constants/constants';

export const movieAPI = {
  getUpcomingMovie(page) {
    return axios
      .get(`${BASE_URL}movie/upcoming?${API_KEY}&page=${page}`)
      .then((response) => response.data);
  },

  getNowplayingMovie(page) {
    return axios
      .get(`${BASE_URL}movie/now_playing?${API_KEY}&page=${page}`)
      .then((response) => response.data);
  },

  getMovieDetail(movieId) {
    return axios
      .get(`${BASE_URL}movie/${movieId}?${API_KEY}`)
      .then((response) => response.data);
  },

  getMovieReviews(movieId) {
    return axios
      .get(`${BASE_URL}movie/${movieId}/reviews?${API_KEY}`)
      .then((response) => response.data.results);
  },

  getMovieTrailer(movieId) {
    return axios
      .get(`${BASE_URL}movie/${movieId}/videos?${API_KEY}`)
      .then((response) => response.data.results);
  },

  getMovieRecommendations(movieId) {
    return axios
      .get(`${BASE_URL}movie/${movieId}/recommendations?${API_KEY}&page=1`)
      .then((response) => response.data.results);
  },

  getMovieGenres() {
    return axios
      .get(`${BASE_URL}genre/movie/list?${API_KEY}`)
      .then((response) => response.data.genres);
  },

  getMovieByGenre(page, genreId) {
    return axios
      .get(
        `${BASE_URL}discover/movie?${API_KEY}&with_genres=${genreId}&page=${page}`
      )
      .then((response) => response.data);
  },

  getPopularMovie() {
    return axios
      .get(`${BASE_URL}movie/popular?${API_KEY}`)
      .then((response) => response.data);
  },

  getSearchedMovie(page, name) {
    return axios
      .get(`${BASE_URL}search/movie?query=${name}&${API_KEY}&page=${page}`)
      .then((response) => response.data);
  },
};
