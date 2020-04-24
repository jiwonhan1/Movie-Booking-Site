import React, {Component} from 'react';
import NavBar from "./NavBar";
import MovieScheduleList from "./Movie";
import Body from "./Body";
import Footer from "./Footer";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
      showTimes: ['3PM', '8PM'],
      formVisible: false,
      detailVisible: false,
      currentTime: new Date().getHours()
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
      <div><NavBar /></div>
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <MovieScheduleList
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
      <div><Footer /></div>
      </>
    );
  }
}

export default App;
