import React, {Component}from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import MovieAdd from './MovieAdd';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';
import MovieEdit from './MovieEdit';

class Control extends Component {

    setVisibility  = () => {
      const { detailVisible, selectedMovie, editing} = this.props;
      if(selectedMovie === null && detailVisible === false){
        return <MovieAdd/>
      }
      else if (detailVisible === true){
        return <MovieInfo movie = {selectedMovie}/>
      }
      else if (editing === true){
        return <MovieEdit movie = {selectedMovie}/>
      }
      else if ( detailVisible === false && editing === false) 
      {
        return <MovieList/>
      }
    }
  render(){
    console.log(this.setVisibility());
    console.log(this.props);
    let currentPage = this.setVisibility()
    return(
      <>
        {currentPage}
      </>
    )
  }
}

Control.propTypes = {
  movies: PropTypes.object,
  detailVisible: PropTypes.object,
  selectedMovie: PropTypes.object,
  editing: PropTypes.object
}

const mapStateToProps = (state) => ({ 
  formVisible: state.formVisible, 
  detailVisible: state.detailVisible, 
  selectedMovie: state.selectedMovie,
  editing: state.editing,
  movies: state.movies });  

export default connect(mapStateToProps)(Control);               
