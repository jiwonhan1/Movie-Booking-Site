import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieInfo from './MovieInfo';
import * as action from '../actions/actions';
import { connect } from 'react-redux';
import './Movie.css';

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
  const { id, title, poster } = this.props;
    return (
      <React.Fragment>
        <div className="movies" onClick={()=> this.handleDetailRequest(id)}>
          <img src={poster} alt={title} title={title}/>
          <p>{title}</p>
        </div>
      </React.Fragment>
    )
  }
}

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

