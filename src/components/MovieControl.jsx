import React from 'react';
import MovieScheduleList from './MovieScheduleList';
import NewMovie from './NewMovie';
import MovieDetails from './MovieDetails';
import MovieBooking from './MovieBooking';

class MovieControl extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
       
    this.state = {
      masterMovies : props.movies.map(movie => {
        return {...movie,
             ticket : 8,
             price : 5,
             showTime : "3PM",
             message : "Available"
           }
       }),
       showTimes : ['3PM', '8PM'],
      formVisible: false,
      selectedMovie : null,
      selectedBooking : null,
      currentTime : new Date().getHours()
    }
  }
  
  handleAddingNewMovieToList =(newMovie)=>{
    const newMasterMovieList = this.state.masterMovies.concat(newMovie);
    this.setState({masterMovies : newMasterMovieList});
    this.setState({formVisible : false});
  }

  handleSelectedMovie = (id) => {
    const selectedMovie = this.state.masterMovies.filter(movie => movie.id === id)[0];
    this.setState({selectedMovie : selectedMovie, selectedBooking : null})
  }

  handleSelectedMovieBooking = (id) => {
    const selectedBooking = this.state.masterMovies.filter(movie => movie.id === id)[0];
    this.setState({selectedBooking : selectedBooking, selectedMovie : null})
  }

  handleCancel = (movieCancel) => {
    this.state.selectedBooking.message = "Available";
    this.state.selectedBooking.ticket  < 8 ?  this.state.selectedBooking.ticket ++ : this.state.selectedBooking.message = "Tickets are limited to 8";
    const newMasterMovieList = this.state.masterMovies.filter(movie => movie.id !== this.state.selectedBooking.id).concat(movieCancel);
    this.setState({masterMovies: newMasterMovieList})
  }

  handleBooking = (movieBooking) => {
    this.state.selectedBooking.ticket > 0 ? this.state.selectedBooking.ticket -- : this.state.selectedBooking.message = "Out of stock";
    const newMasterMovieList = this.state.masterMovies.filter(movie => movie.id !== this.state.selectedBooking.id).concat(movieBooking);
    this.setState({masterMovies: newMasterMovieList});
  } 

  handleDeleting = (id) => {
    const newMasterMovieList = this.state.masterMovies.filter(movie => movie.id != id);
    this.setState({masterMovies : newMasterMovieList});
    this.setState({selectedMovie: null});
  }

  mainPage = () => {
    this.setState({formVisible : false, selectedMovie : null, selectedBooking: null})
  }
  newMoviePage = () => {
    this.setState({formVisible : true, selectedMovie : null, selectedBooking: null})
    
  }

  // MovieDetailPage = () => {
  //   this.setState({formVisible : false, selectedMovie : !null})
  // }

  setVisibility  = () => {
    if(this.state.formVisible){
      return <NewMovie newMovieCreation={this.handleAddingNewMovieToList}/>
    }
    else if (this.state.selectedMovie != null){
      return <MovieDetails movie = {this.state.selectedMovie} onDeletingMovie={this.handleDeleting}/>
    }
    else if (this.state.selectedBooking != null){
      return <MovieBooking movie = {this.state.selectedBooking} onBooking={this.handleBooking} onCancel={this.handleCancel}/>
    }
    else{
      return <MovieScheduleList movieScheduleList={this.state.masterMovies} movieSelectedonMainPage={this.handleSelectedMovie} movieSelecetedBookingonMainPage={this.handleSelectedMovieBooking}/>
    }
  }
 
  render(){
    console.log(this.state)
    let currentPage = this.setVisibility()
    return(
      <>
        <div className="pageChange">
          <button onClick={this.mainPage}>Main Page</button>
          <button onClick={this.newMoviePage}>Add new Movie</button>  
        </div>
        <div className="MovieList">
          {currentPage}
        </div>
        <div className="timeSchedule">
          <lable for="timeSchedule">View time schedule</lable>
          <select className="form-control" id="selectedTime" value={this.state.currentTime} onChange={this.handleSelect}><option value="15">3PM</option><option value="20">8PM</option></select>
        </div>
      </>
    )
  }
}

export default MovieControl;