import React from 'react';
import {FormExampleForm} from './FormExampleForm'
import {connect} from 'react-redux';
import {onNewMovies,fetchingMovies} from '../actions/NewMovies'


export  class NewMoviesPage extends React.Component{

   componentDidMount(){
       console.log('componenetDidMount',this.props.NewMovies.movies);
       this.props.fetchingMovies();
       console.log('fetching işleminden sonra:',this.props);
   }

    render(){
        console.log('NewMoviePage????',this.props);
        return(

            <div>
                <FormExampleForm  onNewMovies={this.props.onNewMovies} movie={this.props.movie}/>
            </div>
        );
    }
}


const mapStateToProps=(state,props)=>{ //state-->store içindeki data  props-->componentteki props parametre olarak veriliyor
    console.log('in NewMoviesPage', state);
    const liste=(state.NewMovies.movies)? state.NewMovies.movies:[];
	return{
        NewMovies: state.NewMovies,
        movie:liste.find((item)=>item._id===props.match.params._id)
	}
};

const mapDispatchToProps={
    onNewMovies:onNewMovies,
    fetchingMovies:fetchingMovies
}

export default connect(mapStateToProps,mapDispatchToProps)(NewMoviesPage)// componente store ve action methodlarını bağlar