import React from 'react';
import PropTypes from 'prop-types';


function Movie(props) {
  return (
    <>
    <p>{props.id}</p>
    <p>{props.year}</p>
    <p>{props.title}</p>
    <p>{props.summary}</p>
    <p>{props.medium_cover_image}</p>
    </>
  )
}

export default Movie;