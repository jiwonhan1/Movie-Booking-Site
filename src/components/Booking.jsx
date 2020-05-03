import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectMovie, clickBook } from '../actions/actions'
import { Form, Popup } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class Booking extends Component {

  handleChange = (e) => {
    this.setState({ [e.target.name]: parseInt(e.target.value)})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.selectMovie(this.state.id)
  }

  handleClick = (e) => {
    const {selectedMovie} = this.props;
    this.setState({"selectedSeat" : e.target.getAttribute('value')});
    if(selectedMovie.bookedSeat.includes(this.state.selectedSeat))
    {
      alert('Already booked')
      // this.state.selectedSeat = null;
      console.log(this.state.selectedSeat);
    }
    else 
    {
      // this.state.selectedSeat = !null;
      // selectedSeat
    }
  }

  handleBook = (e) => {
    e.preventDefault();
    console.log(this.state)
    const {selectedMovie} = this.props;
    console.log(selectedMovie);
    if(selectedMovie.bookedSeat.includes(this.state.selectedSeat))
    {
      alert('Already booked')
    }
    else if (selectedMovie.bookedSeat.length > 8)
    {
      alert('Sold out')
    }
    else
    {
    this.props.clickBook(this.state.selectedSeat);
    }
  }

  setPages  = () => {
    const { selectedMovie, movies, table} = this.props;
    
    if(table === true)
    {
      console.log(selectedMovie);
      return (
        <form onSubmit={this.handleBook}>
          <table>
            <tbody>
              {
                  selectedMovie.seatTable.map((seatList,i) =>(
                    <tr key={i} rowIndex={i}>
                      {
                        seatList.map((seat,j)=>
                          <td key={j} columnIndex={i} value={seat} onClick={this.handleClick}>{seat}</td>
                        )
                      }
                    </tr>
                  ))
                }
            </tbody>
          </table>
          <button type="submit">Book</button>
        </form>        
      )
        
  
    }
    else {
      return console.log(selectedMovie); 
    }
  }

  render() {
    const {movies, clickSeat, clickBook, table} = this.props;

    let currentPage = this.setPages();
    console.log(this.props);
    return(
      <>
      <div>
        <form onSubmit={this.handleSubmit}>
        <select className="form-control" id="selectedForBook"  placeholder={movies.id} name="id" onChange={this.handleChange}>{movies.map((title, index) => (<option value={title.id}>{title.title}</option>))}
        </select>
        <button type="submit">See the seats</button>
        </form>
        

      </div>
      {currentPage}
      </>
    )
    
    // return(
    //   <>
        // <form>
        //   <table>
        //     <tbody>
        //       {
        //           movies.seatTable.map((seatList,i) =>(
        //             <tr key={i} rowIndex={i}>
        //               {
        //                 seatList.map((seat,j)=>
        //                   <td key={j} columnIndex={i} value={seat} onClick={clickSeat}>{seat}</td>
        //                 )
        //               }
        //             </tr>
        //           ))
        //         }
        //     </tbody>
        //   </table>
        //   <button onClick={clickBook}>Book</button>
        // </form>        
    //   </>
    // )     


  }
}

const mapStateToProps = (state) => ({ movies: state.movies, detailVisible: state.detailVisible, selectedMovie: state.selectedMovie, table: state.table});  

const mapDispatchToProps = { selectMovie, clickBook };

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
