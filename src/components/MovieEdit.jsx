import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editMovie } from '../actions/actions';
import Movie from './Movie';

class MovieEdit extends Component {
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    // const { movie } = this.props;
    const { editMovie, detailVisible, selectedMovie } = this.props;
    e.preventDefault();
    const title = this.state.title;
    const id = this.state.id;
    console.log('id ' + selectedMovie.id);
    const movie = this.state
    editMovie(movie);
  }
  render() {
    const { movie } = this.props;
    return (
      <>
      <div>
        <h1>Edit {movie.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <lable>Title</lable>
            <input type="text" name="title" defaultValue={this.props.movie.title} onChange={this.handleChange} className="form-control" />
          </div>
      <div className="btn-group">
        <button type="submit" className="btn btn-dark">Update</button>
      </div>
      </form>
      </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({ selectedMovie: state.selectedMovie});

const mapDispatchToProps = {editMovie};

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);