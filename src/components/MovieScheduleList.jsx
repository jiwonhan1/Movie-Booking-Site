import React from 'react';
import Movie from './Movie';
import PropTypes from "prop-types";

function MovieScheduleList(props){
    return (
        <>
          {props.movieScheduleList.map((movie) =>
          <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                ticket={movie.ticket}
                price={movie.price}
                showTime={movie.showTime}
                message={movie.message}
                movieSelected={props.movieSelectedonMainPage}   
                movieSelectedBooking={props.movieSelecetedBookingonMainPage}
                onCancel={props.onCancel}       
                />

          )}
        </>
    );
};

MovieScheduleList.propTypes = {
  movieScheduleList: PropTypes.array,
  movieSelectedonMainPage: PropTypes.func,
}
export default MovieScheduleList;