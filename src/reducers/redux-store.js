import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import movies from './movies';
import movieDetails from './movieDetails';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducers = combineReducers({
    movies,
    movieDetails
});



const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
