import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
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
    this.setState({ movies : movies.map(movie => {return{...movie, ticket:8, seatTable : [
      ['A1', 'A2', 'A3', 'A4'],
      ['B1', 'B2', 'B3', 'B4'],
    ], showTime: '3PM', bookedSeat: []}}), isLoading: false});
    console.log(this.setState)
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Welcome to Class theater!</span>
          </div>
        ) : 
        (
        <div>{movies.map(movie => <li>{movie.title}</li>)}
       </div>
        )}
      </>
    );
  }
}

export default App;
