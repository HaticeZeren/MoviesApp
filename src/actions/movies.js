import axios from 'axios';

import {API_BASE} from '../config/env';

export const FETCH_MOVIES_FULFILLED  = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED="FETCH_MOVIES_REJECTED";
export const FETCH_MOVIES_PENDING ="FETCH_MOVIES_PENDING";

export function fetchingMovies(){// dispatch return eden bir action methodudur.
    return (dispatch)=>{
        console.log('fetching movies');
        dispatch({

            type:"FETCH_MOVIES",
            payload: axios.get(API_BASE)
            .then(function (response) {
                return response.data;
              })
              
        })


    }

}

/**
 * 
 * 
 *  
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
 */