import axios from "axios";
import * as actions from "./actions";

export function fetchMovies() {
  return dispatch => {
    dispatch(actions.fetchDataBegin());
    axios.get("https://yts-proxy.now.sh/list_movies.json?limit=6&sort_by=rating")
    .then(reponse => {dispatch(actions.fetchData(reponse.data.data.movies));
    })
    .catch(error => {dispatch(actions.fetchDataFailure(error))
    })
  }
}