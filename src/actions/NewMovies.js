import axios from 'axios';


import {API_BASE} from '../config/env'

export const NEW_MOVIES_FULFILLED  ="NEW_MOVIES_FULFILLED";
export const NEW_MOVIES_REJECTED="NEW_MOVIES_REJECTED";
export const NEW_MOVIES_PENDING ="NEW_MOVIES_PENDING";

export const FETCH_MOVIES_FULFILLED  = "FETCH_MOVIES_FULFILLED";


export function onNewMovies({title,cover}){

    console.log('onNewMovies',title,cover);
    return (dispatch)=>{
        
        dispatch({
            type:'NEW_MOVIES',
            payload: axios.post('http://localhost:8080/api/movies',{title:title,cover:cover})
        })       

        
    }
}

export function fetchingMovies(){// dispatch return eden bir action methodudur.
    return (dispatch)=>{
        console.log('fetching movies');
        dispatch({

            type:"FETCH_MOVIES",
            payload: axios.get(API_BASE)
            .then(function (response) {
                console.log(response.data);
                return response.data;
              })
              
        })


    }

}