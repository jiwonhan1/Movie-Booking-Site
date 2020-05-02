import React, {Component} from 'react';
// import {connect} from 'react-redex';
// import * as action from '../actions/actions';
import Booking from './Booking';

class SeatTable extends Component {
    constructor() {
      super();
      this.state = {
        seatTable : [
          ['A1', 'A2', 'A3', 'A4'],
          ['B1', 'B2', 'B3', 'B4'],
        ],
          selectedSeat: null,
          bookedSeats : [],
      }
    }
  // componentDidMount(prevProps, prevState){
  //   const { seatTable, bookedSeats } = this.props;
  // }

  onClickSeat = (e) => {
    let selectedSeat = e.target.getAttribute('value');
    this.state.selectedSeat = selectedSeat; 
    console.log(this.state.bookedSeats)
    console.log(selectedSeat)
    console.log('this state ' + this.state.selectedSeat)
    if(this.state.bookedSeats.includes(selectedSeat))
    {
      alert('Already booked')
      this.state.selectedSeat = null;
      console.log(this.state.selectedSeat);
    }
    else 
    {
      // this.state.selectedSeat = !null;
      // selectedSeat
    }
  }

  // handleAddingNewMovieToList =(newMovie)=>{
  //   const newMasterMovieList = this.state.masterMovies.concat(newMovie);
  //   this.setState({masterMovies : newMasterMovieList});
  //   this.setState({formVisible : false});
  // }

  onClickBooking = (e) => {
    e.preventDefault();
    let selectedSeat = this.state.selectedSeat;
    console.log(selectedSeat);
    const newBooked = this.state.bookedSeats.concat(selectedSeat);
    this.setState({bookedSeats : newBooked});
    console.log(this.state.bookedSeats);
  }
  render () {
    return(
      <>
        <form>
          <table>
            <tbody>
              {
                  this.state.seatTable.map((seatList,i) =>(
                    <tr key={i} rowIndex={i}>
                      {
                        seatList.map((seat,j)=>
                          <td key={j} columnIndex={i} value={seat} onClick={this.onClickSeat}>{seat}</td>
                        )
                      }
                    </tr>
                  ))
                }
            </tbody>
          </table>
          <button onClick={this.onClickBooking}>Book</button>
        </form>        
      </>
    ) 
  }
}

export default SeatTable;