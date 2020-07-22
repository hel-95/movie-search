import { movieAPI } from '../api/api';

const SET_TOGGLE_IS_FETCHING = 'demo-movie/movieDetails/SET_TOGGLE_IS_FETCHING';
const SET_MOVIE_DETAIL = 'demo-movie/movieDetails/SET_MOVIE_DETAIL';
const SET_MOVIE_REVIEWS = 'demo-movie/movieDetails/SET_MOVIE_REVIEWS';
const SET_MOVIE_TRAILER = 'demo-movie/movieDetails/SET_MOVIE_TRAILER';
const SET_MOVIE_RECOMMENDATIONS = 'demo-movie/movieDetails/SET_MOVIE_RECOMMENDATIONS';

const initialState = {
    isFetching: false,
    movieDetail: {},
    cast: [],
    reviews: [],
    trailer: [], 
    recommendations: []
}


const movieDetails = (state = initialState, action) => {
    
    switch(action.type) {

    case SET_MOVIE_DETAIL:
        return {...state, movieDetail: {...action.movieDetail} }
   
    case SET_MOVIE_REVIEWS:
        return {...state, reviews: [...action.reviews] }

    case SET_MOVIE_TRAILER:
        return {...state, trailer: [...action.trailer] }
    
    case SET_TOGGLE_IS_FETCHING:
        return { ...state, isFetching: action.isFetching }

    case SET_MOVIE_RECOMMENDATIONS:
        return {...state, recommendations: [...action.recommendations] }

    default:
        return state;
        
}
}

 const setMovieDetail = (movieDetail) => ({type: SET_MOVIE_DETAIL, movieDetail});

 const setMovieReviews = (reviews) => ({type: SET_MOVIE_REVIEWS, reviews});

 const setMovieTrailer = (trailer) => ({type: SET_MOVIE_TRAILER, trailer});

 const setToggleIsFetching = (isFetching) => ({type: SET_TOGGLE_IS_FETCHING, isFetching});

 const setMovieRecommendations = (recommendations) => ({type: SET_MOVIE_RECOMMENDATIONS, recommendations})


export const getMovieDetail = (movieId) => async(dispatch) => {
    dispatch(setToggleIsFetching(true));
    try {
        let data = await movieAPI.getMovieDetail(movieId);
        let reviews = await movieAPI.getMovieReviews(movieId);
        const trailer = await movieAPI.getMovieTrailer(movieId);
        const recommendations = await movieAPI.getMovieRecommendations(movieId);
               
        dispatch(setMovieDetail(data));
        dispatch(setMovieReviews(reviews));
        dispatch(setMovieTrailer(trailer));
        dispatch(setMovieRecommendations(recommendations));
        dispatch(setToggleIsFetching(false));
    } catch (err) {
        console.err(err);
    }
}

export default movieDetails;