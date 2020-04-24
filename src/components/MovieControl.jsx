import React from 'react';
import MovieScheduleList from './MovieScheduleList';
import NewMovie from './NewMovie';
import MovieDetails from './MovieDetails';
import { v4 } from 'uuid';

class MovieControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies = [],
      formVisible: false,
      detailVisible: false,
      selectedMovie : null,
      currentTime : new Date().getHours()
    }

  }
}

export default MovieControl;