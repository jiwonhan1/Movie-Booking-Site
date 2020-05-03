import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieInfo extends Component {
  render(){
    const { movie, editing } = this.props;
    const { deleteMovie, getEditForm, detailVisible } = this.props;
    console.log(this.props);
    return(
      <>
        <p>{movie.id}</p>
        <button onClick={() => deleteMovie(movie.id)}>Delete</button>
        <button onClick={() => getEditForm(movie.id)}>Edit</button>
      </>
    )
  }

}

const mapStateToProps = (state, ownProps) => ({ selectedMovie : ownProps.selectedMovie, editing: state.editing, detailVisible: state.detailVisible})

const mapDispatchToProps = (dispatch)=> ({
  deleteMovie:(id) => dispatch(action.deleteMovie(id)),
  getEditForm:(id) => dispatch(action.getEditForm(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);

MovieInfo.propTypes = {
  movie: PropTypes.object,
  deleteMovie: PropTypes.func,
  getEditForm: PropTypes.func,
}