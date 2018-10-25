import {NEW_MOVIES_FETCHING, NEW_MOVIES_FETCHED} from '../actions/NewMovies';


export default (state=[],action)=>{

    switch(action.type){
        case NEW_MOVIES_FETCHED:
        return({

        })

        case NEW_MOVIES_FETCHING:
        return({

        })

        default:
        return({
            
        })
    }

    return state;
}