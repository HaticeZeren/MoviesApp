

import {  FETCH_MOVIES_FULFILLED,FETCH_MOVIES_REJECTED ,DELETE_MOVIES_FULFILLED} from '../actions/movies';

const init ={
    movies:[],
    fetching:false,
    fetched:false,
    error:{}
}


export default (state=init,action)=>{

    switch(action.type){

        case FETCH_MOVIES_FULFILLED :
        return({
            
            ...state,
            movies:action.payload,
            fetched:true

        })


        case DELETE_MOVIES_FULFILLED :
        return({
            
            ...state,
           
        })

       
        case FETCH_MOVIES_REJECTED:
        return({
            ...state,
            fetched:false,
            error:action.payload
        })

    
    }

    return {
        ...state,
        
    };
}