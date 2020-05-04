import * as actions from '../actions/actions'; 

const initialState = {
  movies : [],
  loading: false,
  error: null,
  selectedMovie: {},
  formVisible: false,
  editing: false,
  booking : false,
  detailVisible: false,
  table: false,
}

function reducer(state = initialState, action) {
  const movies = [...state.movies];
  const selectedMovie = state.selectedMovie
  switch(action.type){
    case actions.FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actions.FETCH_DATA:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies.map(movie => {return {...movie, ticket: 8, 
        seatTable :
          [
            ['A1', 'A2', 'A3', 'A4'],
            ['B1', 'B2', 'B3', 'B4'],
          ], 
        showTime: '3PM', bookedSeat: []}})
      };

      
    case actions.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.playload.error,
        movies: []
      }
    
    case actions.ADD_MOVIE:
      let newMovie = action.movie;
      return {
        ...state,
        movies: movies.concat({...newMovie, ticket: 8, 
          seatTable :
            [
              ['A1', 'A2', 'A3', 'A4'],
              ['B1', 'B2', 'B3', 'B4'],
            ], 
          showTime: '3PM', bookedSeat: []}),
        detailVisible: false,
        editing: false,
      }
    case actions.MOVIE_INFO:
      console.log(selectedMovie);
      console.log(action.id);
      return{
        ...state, 
        selectedMovie: movies.find(movie => movie.id === action.id),
        detailVisible: true,
        editing: false,
      }
    case actions.DELETE_MOVIE:
      return {
        ...state,
        movies: movies.filter(movie => movie.id !== action.id),
        detailVisible: false,
        editing: false,
      }
    case actions.GET_EDIT_FORM:
      console.log(action.id);
      return {
        ...state,
        selectedMovie: movies.find(movie => movie.id === action.id),
        detailVisible: false,
        editing: true,
      }
    case actions.EDIT_MOVIE:
      let updatedMovie = action.movie;
      console.log("======= update movie =====")
      console.log(updatedMovie);
      return {
        ...state,
        movies: movies.filter(movie => movie.id !== selectedMovie.id).concat({...updatedMovie}),
        detailVisible: false,
        editing: false
      }
      case actions.SELECT_MOVIE:
        let id = action.id
        console.log('id is '+ id);
        console.log(action);
        console.log(selectedMovie);
        console.log(movies);
        return {
          ...state,
          selectedMovie: movies.find(movie => movie.id === action.id),
          table: true,
        }  
      case actions.BOOK:
        let seat = action.seat;
        console.log(seat)
        selectedMovie.ticket > 0 ? selectedMovie.ticket -- && selectedMovie.bookedSeat.push(seat) : selectedMovie.ticket = 0;
        let newLIst = movies.filter(movie => movie.id !== selectedMovie.id).concat(selectedMovie)
        return {
         ...state,
         movies: newLIst,
        } 
    default:
      return state;

  }
}

export default reducer;

