import React, {Component} from 'react';
import { Router, Route, NavLink, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import Control from "./Control";
import Footer from "./Footer";
import MovieAdd from "./MovieAdd";
import Booking from "./Booking";
import history from '../history';
import './App.css';
import { fetchMovies } from "../actions/fetchData";

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    console.log(this.props.movies);
    const { error, loading, movies} = this.props;
    if (error){
      return <div>Error!</div>
    }
    if(loading){
      return <div className="initialPage">Welcome to Classic Theater!</div>
    }
    return (
      <Router history ={history}>
        <div>
          <Nav/>
          <Main/>
          <Footer/>
          </div>
      </Router>
    );
  }
}

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/movies">Movies</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/movies/new">Add Movie</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/movies/book">Booking</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Control}/>
    <Route exact path='/movies' component={Control}/>
    <Route exact path='/movies/new' component={MovieAdd}/>
    <Route exact path='/movies/book' component={Booking}/>
  </Switch>
)

const mapStateToProps = (state) => ({
  movies: state.movies,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = { fetchMovies };
export default connect(mapStateToProps, mapDispatchToProps)(App);
