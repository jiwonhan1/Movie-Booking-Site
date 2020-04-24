import React from 'react';
import PropTypes from 'prop-types';


function Movie(props) {
  return (
    <>
    <img src={props.poster} alt={props.title} title={props.title} />
    <p>id : {props.id}</p>
    <p>year : {props.year}</p>
    <p>title : {props.title}</p>
    <p>summary : {props.summary}</p>
    <p>genres : {props.genres}</p>
    </>
  )
}

export default Movie;
