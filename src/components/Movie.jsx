import React from 'react';
import PropTypes from 'prop-types';


function Movie(props) {
  const {onBooking, onCancel} = props;
  return (
    <>
    {/* <div onClick = {() => props.movieSelected(props.id)}> */}
      <img src={props.poster} alt={props.title} title={props.title} />
      <p>id : {props.id}</p>
      <p>year : {props.year}</p>
      <p>title : {props.title}</p>
      <p>summary : {props.summary}</p>
      <p>genres : {props.genres}</p>
      <p>Ticket Price : {props.price}</p>
      <p>Ticket Quantities: {props.ticket}</p>
      <p>Show Time : {props.showTime}</p>
      <p>Current Ticket Status : {props.message}</p>
      <button onClick= {() => props.movieSelectedBooking(props.id)}>Book</button>
      <button onClick= {() => props.movieSelected(props.id)}>Details</button>
      {/* <button onClick= {() => props.onCancel(props.id)}>Cancel</button> */}
    {/* </div> */}
    </>
  )
}

Movie.prototype={
  id: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ticket: PropTypes.number.isRequired,
  showTime: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  movieSelected: PropTypes.func,
  onBooking: PropTypes.func,
};

export default Movie;
