import React, {Component} from 'react';
import {connect} from 'react-redux';
import {MoviesList} from './MoviesList';


class MoviesPage extends Component {

	
	render() {
		console.log('moviesPage',this.props.movies.length);
		return (
			<div>
				<h2>Movies Page</h2>
				<MoviesList movies={this.props.movies}></MoviesList>

			</div>
		);
	}
}

const mapStateToProps=(state)=>{
	return{
      movies:state.movies
	}
};

export default connect(mapStateToProps)(MoviesPage);