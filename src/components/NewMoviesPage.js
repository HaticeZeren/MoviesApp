import React from 'react';
import {FormExampleForm} from './FormExampleForm'
import {connect} from 'react-redux';
import {onNewMovies,newFetchingMovies,updateMovies} from '../actions/NewMovies'


export  class NewMoviesPage extends React.Component{

    componentDidMount() {
        const { match } = this.props;
        console.log(match.params._id);
		if ( !this.props.NewMovies.movie && match.params._id) {
          //  this.props.newFetchingMovies();
          this.props.newFetchingMovies(match.params._id);
		}
		
    }
    
    componentWillMount(){
        console.log('componentWillMount');
    }
    
       render(){
           console.log('id Verilen film:',this.props.movie);
        return(

            <div>
                <FormExampleForm  onNewMovies={this.props.onNewMovies} movie={this.props.movie} updateMovies={this.props.updateMovies}/>
            </div>
        );
           }


}



const mapStateToProps=(state,props)=>{ //state-->store içindeki data  props-->componentteki props parametre olarak veriliyor
    console.log('/movie/:_id için  NewMoviesPage sayfasındayız',props.match.params._id);
    console.log(state);
    console.log(state.NewMovies.movies);
	return{
        NewMovies: state.NewMovies,
        movie:state.NewMovies.movies
	}
};

const mapDispatchToProps={
    onNewMovies:onNewMovies,
    newFetchingMovies:newFetchingMovies,
    updateMovies:updateMovies
}

export default connect(mapStateToProps,mapDispatchToProps)(NewMoviesPage)// componente store ve action methodlarını bağlar