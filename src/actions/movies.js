import axios from 'axios';

import {API_BASE} from '../config/env';

export const FETCH_MOVIES_FULFILLED  = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED="FETCH_MOVIES_REJECTED";
export const FETCH_MOVIES_PENDING ="FETCH_MOVIES_PENDING";

export const DELETE_REJECTED   ="DELETE_REJECTED";
export const DELETE_FULFILLED  ="DELETE_FULFILLED";
export const DELETE_PENDING="DELETE_PENDING";


export const DELETE_MOVIES_FULFILLED  = "DELETE_MOVIES_FULFILLED";
//DELETE_MOVIES
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


export function deleteMovie(id){
    console.log(`${API_BASE}/${id}`);
	return dispatch => {
		dispatch({
			type: "DELETE_MOVIES",
            payload: axios.delete(`${API_BASE}/${id}`)
		})
	}
}


