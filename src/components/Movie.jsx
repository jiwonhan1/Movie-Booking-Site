import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieInfo from './MovieInfo';
import { clickInfo } from '../actions/actions';
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

Movie.propTypes = {
  key: PropTypes.object,
  id: PropTypes.object,
  title: PropTypes.object,
  poster: PropTypes.object,
  clickInfo: PropTypes.object,
  detailVisible: PropTypes.object,
  selectedMovie: PropTypes.object,
  clickInfo: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => ({
  key: ownProps.key,
  id: ownProps.id,
  title: ownProps.title,
  poster: ownProps.poster,
  selectedMovie: state.selectedMovie,
});

const mapDispatchToProps = { clickInfo }

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

