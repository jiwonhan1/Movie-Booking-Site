import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './Booking.css';
import { selectMovie, clickBook } from '../actions/actions'
import { Form, Popup } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class Booking extends Component {

  handleChange = (e) => {
    this.setState({ [e.target.name]: parseInt(e.target.value)})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.selectMovie(this.state.id)
  }

  handleClick = (e) => {
    const {selectedMovie} = this.props;
    this.setState({"selectedSeat" : e.target.getAttribute('value')});
    if(selectedMovie.bookedSeat.includes(this.state.selectedSeat))
    {
      alert('Already booked')
      // this.state.selectedSeat = null;
      console.log(this.state.selectedSeat);
    }
    else 
    {
      // this.state.selectedSeat = !null;
      // selectedSeat
    }
  }

  handleBook = (e) => {
    e.preventDefault();
    console.log(this.state)
    const {selectedMovie} = this.props;
    console.log(selectedMovie);
    if(selectedMovie.bookedSeat.includes(this.state.selectedSeat))
    {
      alert('Already booked')
    }
    else if (selectedMovie.bookedSeat.length > 8)
    {
      alert('Sold out')
    }
    else
    {
    this.props.clickBook(this.state.selectedSeat);
    }
  }

  setPages  = () => {
    const { selectedMovie, table} = this.props;
    
    if(table === true)
    {
      console.log(selectedMovie);
      return (
        <React.Fragment>
          <div class="screenTableWrapper">
            <div class="screen">
              <p>Screen</p>
            </div>
            <div className="table">
              <form onSubmit={this.handleBook}>
                <table class="table table-dark">
                  <tbody>
                    {
                        selectedMovie.seatTable.map((seatList,i) =>(
                          <tr key={i} rowIndex={i}>
                            {
                              seatList.map((seat,j)=>
                                <td key={j} columnIndex={i} value={seat} onClick={this.handleClick}>{seat}</td>
                              )
                            }
                          </tr>
                        ))
                      }
                  </tbody>
                </table>
                <Button color="secondary" className='booking-btn' type="submit">Book</Button>
              </form>
            </div>
          </div>
        </React.Fragment>       
      )
        
  
    }
    else {
      return console.log(selectedMovie); 
    }
  }

  render() {
    const {movies} = this.props;

    let currentPage = this.setPages();
    console.log(this.props);
    return(
      <React.Fragment>
      <div className="selectMovie">
        <form onSubmit={this.handleSubmit}>
        <select className="form-control" id="selectedForBook"  defaultValue={movies.id} name="id" onChange={this.handleChange}>{movies.map((title, index) => (<option value={title.id}>{title.title}</option>))}
        </select>
        <Button color="secondary" type="submit">See the seats</Button>
        </form>
      </div>
      {currentPage}
      </React.Fragment>
    )   
  }
}

const mapStateToProps = (state) => ({ movies: state.movies, detailVisible: state.detailVisible, selectedMovie: state.selectedMovie, table: state.table});  

const mapDispatchToProps = { selectMovie, clickBook };

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
