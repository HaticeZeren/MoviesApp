

import {NEW_MOVIES_FULFILLED,NEW_MOVIES_PENDING,NEW_MOVIES_REJECTED,FETCH_MOVIES_FULFILLED} from '../actions/NewMovies';

const init={
    fetching:false,
    newMovies:[],
    error:{},
    movies:[]
  }


export default (state=init,action)=>{
     
     
  

    switch(action.type){

        case NEW_MOVIES_PENDING:
        return ({
           ...state,
           fetching:false
        })

        case NEW_MOVIES_FULFILLED:
        return({
            ...state,
            newMovies:action.payload.data.movie,
            fetching:true
        })

        case NEW_MOVIES_REJECTED:
        return({
            ...state,
            error:action.payload.response,
            fetching:false
        })

        case FETCH_MOVIES_FULFILLED:
        return ({
            ...state,
            movies:action.payload
        })

        
    }

    return state;
}