import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions/actions';
import {v4} from 'uuid';
import Moment from 'moment';

class MovieAdd extends Component {
  state = { title: '', summary : '', timeCreated: new Moment(), formattedWaitTime: new Moment().fromNow(true), id: v4()};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Add Movie</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" name="title" requried value={this.state.title} onChange={this.handleChange} className="form-control" placeholder="Title"/>
          </div>
          <div className="form-group">
            <textarea name="content" rows="5" requried value={this.state.summary} onChange={this.handleChange} className="form-control" placeholder="Summary"/>
          </div>
          <button type="submit" className="btn btn-dark">Create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ selectedMovie: state.selectedMovie});
const mapDispatchToProps = { addMovie };
export default connect (null, mapDispatchToProps)(MovieAdd);