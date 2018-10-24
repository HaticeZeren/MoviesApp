

import {FETCHED_MOVIES, FETCH_MOVIES_ERROR} from '../actions/movies';

const init ={
    movies:[],
    fetching:false,
    fetched:false,
    error:{}
}
export default (state=init,action)=>{
    
    switch(action.type){

        case FETCHED_MOVIES:
        return({
            ...state,
            movies:action.payload.movies,
            fetched:true

        })

        case FETCH_MOVIES_ERROR:
        return({
            ...state,
            fetched:false,
            error:action.payload
        })
        default:
        return state;

    }

    return state;
}