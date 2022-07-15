
import React from 'react';
import axios from 'axios';

export default class MyReservations extends React.Component {
  state = {
    reservations: []
  }


  componentDidMount() {
    axios.get('http://localhost:5000/myreservations')
      .then(res => {
        var reservations = res.data;
        reservations = reservations.map(reservation => {reservation.date = reservation.date.substring(0,10); return reservation;})
        reservations = reservations.map(reservation => {reservation.starting_time = reservation.starting_time.substring(0,5); return reservation;})
        reservations = reservations.map(reservation => {reservation.ending_time = reservation.ending_time.substring(0,5); return reservation;})
        this.setState({
          reservations
        })
        this.setState({ reservations });
      })
  }

    render() {

    return [
      <div className="res-box">
        <table >
         <tbody>
         <tr>
          <th>Id Classroom</th>
          <th>Date</th>
          <th>Starting Time</th>
          <th>Ending Time</th>

  </tr>
         {this.state.reservations.map((item,i)=>
          <tr id={i}>
            <td style={{textAlign:'center'}}>{item.idclassroom}</td>
            <td style={{textAlign:'center'}}>{item.date}</td>
            <td style={{textAlign:'center'}}>{item.starting_time}</td>
            <td style={{textAlign:'center'}}>{item.ending_time}</td>
          </tr>
         )}
         </tbody>
        </table>
       </div>
    ]
  }
}