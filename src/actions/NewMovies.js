import axios from 'axios';


export const NEW_MOVIES_FETCHING='NEW_MOVIES_FETCHING';
export const NEW_MOVIES_FETCHED='NEW_MOVIES_FETCHED';

export function onNewMovies({title,cover}){

    console.log('onNewMovies',title,cover);
    return (dispatch)=>{
        
        dispatch({
            type:NEW_MOVIES_FETCHED,
            payload: axios.post('http://localhost:8080/api/movies',{title:title,cover:cover})

        })       

        
    }
}