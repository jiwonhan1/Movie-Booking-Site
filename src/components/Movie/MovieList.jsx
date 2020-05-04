
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Movie from './Movie';
import './Movie.css';

class MovieList extends Component {
  
  render() {      
    console.log(this.props)                                                  
    if(this.props.movies.length) {                                
      return (
      <React.Fragment>
        <div className="movieListheader">Movies</div>
        <div className="movieList">
          {this.props.movies.map(movie => 
          <Movie 
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          detailVisible={this.props.detailVisible}/>
          )}
        </div>
      </React.Fragment>
      )    
    } else {
      return (<div>No Movies</div>)
    }
  }
}

MovieList.propTypes = {
  movies: PropTypes.object,
}

const mapStateToProps = (state) => ({ movies: state.movies, detailVisible: state.detailVisible, editing: state.editing, selectedMovie: state.selectedMovie });  

export default connect(mapStateToProps)(MovieList);               

