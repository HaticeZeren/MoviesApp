import axios from 'axios';

import {API_BASE} from '../config/env';

export const FETCHED_MOVIES = "FETCHED_MOVIES";
export const FETCH_MOVIES_ERROR="FETCH_MOVIES_ERROR";

export function fetchingMovies(){// dispatch return eden bir action methodudur.
    return (dispatch)=>{
        axios.get(API_BASE)
        .then(response=>dispatch({
            type:FETCHED_MOVIES,
            payload:{
                movies:response.data
            }
        }))
        .catch(error=>dispatch({
            type:FETCH_MOVIES_ERROR,
            payload:error
        }))
    }

}