import React, {Component} from 'react';
import MovieControl from './MovieControl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Main from "./Main";  
import Footer from "./Footer";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movies: [],
    }
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?limit=6&sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(this.setState)
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    console.log(this.state);
    return (
      <>
      {/* <div><NavBar /></div> */}
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : 
        
        (
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/employee' render={(props) => <MovieControl {...props} movies ={this.state.movies} />}/>
          </Switch>
        </Router>
        )}
        
      {/* <div><Footer /></div> */}
      
      </>
    );
  }
}

export default App;
