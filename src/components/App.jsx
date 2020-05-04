import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Router, Route, NavLink, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import Intro from "./Intro";
import Control from "./Movie/Control";
import Footer from "./Footer";
import MovieAdd from "./Movie/MovieAdd";
import Booking from "./Booking/Booking";
import history from '../history';
import { fetchMovies } from "../actions/fetchData";

class App extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    console.log(this.props.movies);
    const { error, loading} = this.props;
    if (error){
      return <div>Error!</div>
    }
    if(loading){
      return <div className="initialPage">Classic Tiny Theater!</div>
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
    <Route exact path='/' component={Intro}/>
    <Route exact path='/movies' component={Control}/>
    <Route exact path='/movies/new' component={MovieAdd}/>
    <Route exact path='/movies/book' component={Booking}/>
  </Switch>
)

App.propTypes = {
  movies: PropTypes.object,
  loading: PropTypes.object,
  error: PropTypes.object,
  fetchMovies: PropTypes.func,
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = { fetchMovies };

export default connect(mapStateToProps, mapDispatchToProps)(App);
