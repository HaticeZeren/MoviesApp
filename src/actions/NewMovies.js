import axios from 'axios';


import {API_BASE} from '../config/env'

export const NEW_MOVIES_FULFILLED  ="NEW_MOVIES_FULFILLED";
export const NEW_MOVIES_REJECTED="NEW_MOVIES_REJECTED";
export const FETCH_MOVIES_FULFILLED  ="FETCH_MOVIES_FULFILLED";
export const UPDATE_MOVIES_FULFILLED  ="UPDATE_MOVIES_FULFILLED";
export const DELETE_MOVIES_FULFILLED  ="DELETE_MOVIES_FULFILLED";

//DELETE_MOVIE



export function onNewMovies({title,cover}){

    console.log('onNewMovies',title,cover);
    return (dispatch)=>{
        
        dispatch({
            type:'NEW_MOVIES',
            payload: axios.post('http://localhost:8080/api/movies',{title:title,cover:cover})
        })       

        
    }
}


export function updateMovies({title,cover,_id}){

    return (dispatch)=>{
        
        dispatch({
            type:'UPDATE_MOVIES',
            payload: axios.put(`${API_BASE}/${_id}`,{_id:_id,title:title,cover:cover})
        })       

        
    }
}


export function silFilm(_id){

    return (dispatch)=>{
        
        dispatch({
            type:'DELETE_MOVIES',
            payload: axios.delete(`${API_BASE}/${_id}`)
        })       

        
    }
}



export function newFetchingMovies(id){// dispatch return eden bir action methodudur.
    return (dispatch)=>{
        console.log(`${API_BASE}/${id}`);
        dispatch({

            type:"FETCH_MOVIES",
            payload: axios.get(`${API_BASE}/${id}`)
            .then(function (response) {
                console.log(response.data);
                return response.data;
              })
              
        })


    }

}