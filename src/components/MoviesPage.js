import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MoviesList} from './MoviesList';

import {fetchingMovies} from '../actions/movies';

class MoviesPage extends Component {


	componentDidMount(){
		console.log('moviesPage componentDidMount');
		this.props.fetchingMovies();
	}
	
	render() {
		console.log('moviesPage',this.props);
		return (
			<div>
				<MoviesList movies={this.props.movies}></MoviesList>

			</div>
		);
	}
}

const mapStateToProps=(state)=>{ //strodaki tüm veriler state içerisinde tutuluyor.
	console.log('mapState:',state);
	return{
      movies:state.movies // /reducer/movies.js içerisindeki verileri 
	}
};

const mapDispatchToProps={
fetchingMovies
};
export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);