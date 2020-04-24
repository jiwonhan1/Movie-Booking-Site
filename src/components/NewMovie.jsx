import React from "react";
import {v4} from 'uuid';
import PropTypes from "prop-types";

function NewMovie(props){

  function handleNewMovieSubmission(event){
    event.preventDefault();
    props.newMovieCreation({title : event.target.title.value, year : event.target.year.value, genres : event.target.genres.value, summary : event.target.summary.value, ticket : parseInt(event.target.ticket.value), showTime : event.target.showTime.value, message: "Available", id: v4()});
  }

  return (
    <>
      <form onSubmit={handleNewMovieSubmission}>
        <input type="text" name="title" placeholder="Title" class="form-control"/>
        <input type="number" name="year" placeholder="Year" class="form-control"/>
        <input type="genres" name="genres" placeholder="Genres" class="form-control"/>
        <input type="textarea" name="summary" placeholder="Summary" class="form-control"/>
        <input type="number" name="ticket" placeholder="Ticket Quantities" class="form-control"/>
        <input type="text" name="showTime" placeholder="Show Time"/>
      </form>
    </>
  )
}

NewMovie.propTypes = {
  newMovieCreation : PropTypes.func
}
export default NewMovie;

