import React from 'react';
import {FormExampleForm} from './FormExampleForm'
import {connect} from 'react-redux';
import {onNewMovies} from '../actions/NewMovies'
export  class NewMoviesPage extends React.Component{

  
    render(){
        console.log('::::::::',this.props)
        return(

            <div>
                <FormExampleForm  onNewMovies={this.props.onNewMovies  }/>
            </div>
        );
    }
}


const mapStateToProps=(NewMovies)=>{
	return{
     NewMovies
	}
};
const mapDispatchToProps={
    onNewMovies:onNewMovies
}

export default connect(mapStateToProps,mapDispatchToProps)(NewMoviesPage)