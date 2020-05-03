//actions -> reducers

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_MOVIE = 'ADD_MOVE';
export const MOVIE_INFO = 'MOVIE_INFO';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const GET_EDIT_FORM = 'GET_EDIT_FORM';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const BOOK = 'BOOK'; 

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
})

export const fetchData = (movies) => ({
  type: FETCH_DATA,
  payload :{movies}
})
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: { error}
})

export const addMovie = movie => ({
  type: ADD_MOVIE,
  movie,
})

export const clickInfo = id => ({
  type: MOVIE_INFO,
  id,
})

export const deleteMovie = id => ({
  type: DELETE_MOVIE,
  id,
})

export const getEditForm = id => ({
  type: GET_EDIT_FORM,
  id,
})

export const editMovie = movie => ({
  type:EDIT_MOVIE,
  movie,
})

export const clickBook = seat => {
  return {
    type: BOOK,
    seat,
  }
}

export const selectMovie = id => {
  return {
    type: SELECT_MOVIE,
    id,
  }
}