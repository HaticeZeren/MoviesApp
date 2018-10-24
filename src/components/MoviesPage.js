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

const mapStateToProps=(state)=>{
	console.log('mapState:',state.movies);
	return{
      movies:state.movies
	}
};

const mapDispatchToProps={
fetchingMovies
};
export default connect(mapStateToProps,mapDispatchToProps)(MoviesPage);