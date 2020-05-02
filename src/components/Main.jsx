import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// function Main(){
//   return (
//     <div className="d-flex flex-row justify-content-center">
//       <Link to="/employee" className="btn btn-dark btn-custom">Employee</Link>
//     </div>
//   );
// }
import { fetchMovies } from "../actions/fetchData";

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    console.log(this.props.movies);
    const { error, loading, movies} = this.props;
    if (error){
      return <div>Error!</div>
    }
    if(loading){
      return <div>Loading..</div>
    }
    return (
      <div>
       {movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(Main);
