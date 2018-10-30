import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MoviesList} from './MoviesList';
import {fetchingMovies ,deleteMovie} from '../actions/movies';

class MoviesPage extends Component {


	componentDidMount(){
		this.props.fetchingMovies();
	}
	
	render() {
		return (
			<div>

				<MoviesList movies={this.props.movies} deleteMovie={deleteMovie} ></MoviesList>

			</div>
		);
	}
}

const mapStateToProps=(state)=>{ //strodaki tüm veriler state içerisinde tutuluyor.
	return{
      movies:state.movies // /reducer/movies.js içerisindeki verileri 
	}
};

const mapDispatchToProps={
fetchingMovies,
deleteMovie
};

export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);