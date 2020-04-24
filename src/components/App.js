import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      masterMovieList = [],
      showTimes: ['3PM', '8PM']
    };

    getMovies = async () => {
      const {
        data: {
          masterMovieList
        }
      } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      this.setState({masterMovieList, isLoading: false});
    };

    componentDidMount() {
      this.getMovies();
    };

    render() {}

  }
  return (
    
  );
}

export default App;
