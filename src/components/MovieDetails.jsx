import React from 'react';
import PropTypes from 'prop-types';

function MovieDetails(props){
  const {movie} = props;

  return(
    <>
      <div class="movieDetail">
        <p>Movie Details</p>
        <img src={movie.medium_cover_image} alt={movie.title} title={movie.title} />
        <p>Title : {movie.title}</p>
        <p>Movie Id : {movie.id}</p>
        <p>Year : {movie.year}</p>
        <p>Genres : {movie.genres}</p>
        <p>Summary : {movie.summary}</p>
        <p>Ticket Price : {movie.price}</p>
        <p>Ticket Quantities : {movie.ticket}</p>
        <p>Show Time : {movie.showTime}</p>
        <p>Current Ticket Status : {movie.message}</p>
        <button onClick = {() =>props.onDeletingMovie(movie.id)}>Delete</button>
      </div>

    </>
  )
}

MovieDetails.propTypes = {
  movie: PropTypes.object,
  onDeletingMovie: PropTypes.func
}
export default MovieDetails;