import React from 'react';
import PropTypes from 'prop-types';

function MovieBooking(props){
  const {movie} = props;

  return(
    <>
      <div class="movieDetail">
        <p>Movie Booking</p>
        <p>Title : {movie.title}</p>
        <p>Movie Id : {movie.id}</p>
        <p>Ticket Price : {movie.price}</p>
        <p>Ticket Quantities : {movie.ticket}</p>
        <p>Show Time : {movie.showTime}</p>
        <p>Current Ticket Status : {movie.message}</p>
        <button onClick = {() => props.onBooking(movie.id)}>Book</button>
        <button onClick = {() => props.onCancel(movie.id)}>Cancel</button>
      </div>

    </>
  )
}

export default MovieBooking;