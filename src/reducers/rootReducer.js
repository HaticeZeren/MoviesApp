import {combineReducers} from 'redux';

import movies from './movies';
import NewMovies from './NewMovies';

export default combineReducers({
    movies:movies,
    NewMovies:NewMovies
})