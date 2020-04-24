import React from 'react';
import Movie from './Movie';
import PropTypes from "prop-types";

function MovieScheduleList(props) {
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
                showTime={movie.showTime}
                message={movie.message}
          />
          )}
        </>
    );
};

MovieScheduleList.propTypes = {
  movieScheduleList: PropTypes.array
}
export default MovieScheduleList;