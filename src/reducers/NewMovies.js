

import {NEW_MOVIES_FULFILLED,FETCH_MOVIES_FULFILLED,UPDATE_MOVIES_FULFILLED} from '../actions/NewMovies';
const init={
    fetching:false,
    newMovies:[],
    error:{},
    movies:[]
  }


export default (state=init,action)=>{
     
     
  

    switch(action.type){

        

        case NEW_MOVIES_FULFILLED:
        return({
            ...state,
            newMovies:action.payload.data.movie,
            fetching:true
        })

       

        case FETCH_MOVIES_FULFILLED:
        return ({
            ...state,
            movies:action.payload.movie
            
        })

        case UPDATE_MOVIES_FULFILLED:
        return({
            ...state
        })

       
        
    }
 console.log('NewMovies reducer',state);
    return {
        ...state,
        newMovies:[],
        movies:[]
    };
}