// import * as data from '../components/App'

import * as actions from '../actions/actions'; 

const initialState = {
  movies : [],
  loading: false,
  error: null
}

function reducer(state = initialState, action) {
  // var { movies } =state;
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
    default:
      return state;
  }
}

export default reducer;

