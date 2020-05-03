import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieInfo from './MovieInfo';
import * as action from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Movie extends Component {
  handleDetailRequest = (id)=> {
    const { clickInfo, detailVisible, selectedMovie } = this.props;
    clickInfo(id);
    console.log('detail ' + detailVisible);
    console.log(selectedMovie)
    console.log('clicked ' + id);
    console.log(this.props);
      return (<div><MovieInfo
              selectedMovie={selectedMovie}/></div>
        )
 
  }
  render(){
  const { id, title, summary, poster } = this.props;
    return (
      <div onClick={()=> this.handleDetailRequest(id)}>
        <img src={poster} alt={title} title={title}/>
        <p>{title}</p>
        <hr/>
      </div>
      
    )
  }
}

// 
// function Movie(props) {
//   return (
//     <>
//       <img src={props.poster} alt={props.title} title={props.title} />
//       <p>id : {props.id}</p>
//       <p>year : {props.year}</p>
//       <p>title : {props.title}</p>
//       <p>summary : {props.summary}</p>
//       <p>genres : {props.genres}</p>
//       <p>Ticket Price : {props.price}</p>
//       <p>Ticket Quantities: {props.ticket}</p>
//       <p>Show Time : {props.showTime}</p>
//       <p>Current Ticket Status : {props.message}</p>
//       <button onClick= {() => props.movieSelectedBooking(props.id)}>Book</button>
//       <button onClick= {() => props.movieSelected(props.id)}>Details</button>
//     </>
//   )
// }

// Movie.prototype={
//   id: PropTypes.string.isRequired,
//   year: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   genres: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   ticket: PropTypes.number.isRequired,
//   showTime: PropTypes.string.isRequired,
//   message: PropTypes.string.isRequired,
//   movieSelected: PropTypes.func,
//   onBooking: PropTypes.func,
// };

const mapStateToProps = (state, ownProps) => ({
  key: ownProps.key,
  id: ownProps.id,
  title: ownProps.title,
  summary: ownProps.summary,
  poster: ownProps.poster,
  selectedMovie: state.selectedMovie,
});

const mapDispatchToProps = (dispatch)=> ({
  clickInfo:(id) => dispatch(action.clickInfo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

