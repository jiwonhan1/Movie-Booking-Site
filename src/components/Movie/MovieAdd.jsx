import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../../actions/actions';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';
import Moment from 'moment';
import Button from '@material-ui/core/Button';

class MovieAdd extends Component {
  state = { id: '', title: '', year: '', summary : '', timeCreated: new Moment(), formattedWaitTime: new Moment().fromNow(true), id: v4()};

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
      <React.Fragment>
        <div className="addMovie">
          <h1>Add Movie</h1>
          <Form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input name="id" requried value={this.state.id} onChange={this.handleChange} className="form-control" placeholder="Id"/>
            </div>
            <div className="form-group">
              <input type="text" name="title" requried value={this.state.title} onChange={this.handleChange} className="form-control" placeholder="Title"/>
            </div>
            <div className="form-group">
              <input type="text" name="year" requried value={this.state.year} onChange={this.handleChange} className="form-control" placeholder="Year"/>
            </div>
            <div className="form-group">
              <textarea name="content" rows="5" requried value={this.state.summary} onChange={this.handleChange} className="form-control" placeholder="Summary"/>
            </div>
            <Button color="secondary" type="submit">Create</Button>
          </Form>
        </div>
      </React.Fragment>
    )
  }
}

MovieAdd.propTypes = {
  selectedMovie: PropTypes.object,
  addMovie: PropTypes.func,
}

const mapStateToProps = (state) => ({ selectedMovie: state.selectedMovie});
const mapDispatchToProps = { addMovie };

export default connect (mapStateToProps, mapDispatchToProps)(MovieAdd);