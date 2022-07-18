import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
/*
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);
 
    fetch('http://localhost:5000/store-data', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}
*/
async function bookUser(credentials) {
  return fetch('http://ec2-44-205-128-120.compute-1.amazonaws.com:30001/book', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })
      .then(data => data.json())
}

const Book = ({ setToken }) => {
  const [classroom, setClassrom] = useState();
  const [date, setDate] = useState();
  const [time_s, setTime_s] = useState();
  const [time_e, setTime_e] = useState();

  const handleSubmit = async e => {
      e.preventDefault();
      const token = await bookUser({
          classroom,
          date,
          time_s,
          time_e
      });
      console.log(classroom)
      console.log(date)
      console.log(time_s)
      console.log(time_e)

      setToken(token);
  }

    return [
      <div className="book-box">
      <form onSubmit={handleSubmit}>
      <div class="field-box">
        <select name='classroom' id='classroom' onChange={e => setClassrom(e.target.value)}>
        <option value="--"></option>
        <option value="Aula Magna">Aula Magna</option>
        <option value="Aula 1">Aula 1</option>
        <option value="Aula 2">Aula 2</option>
        <option value="Aula 3">Aula 3</option>
        <option value="Aula 4">Aula 4</option>
        <option value="Aula 5">Aula 5</option>
        <option value="Aula 6">Aula 6</option>
        <option value="Aula 7">Aula 7</option>
        <option value="Aula 8">Aula 8</option>
        <option value="Aula 9">Aula 9</option>
        <option value="Aula 10">Aula 10</option>
          </select><br></br><br></br>
          <label>Classroom:</label>
          </div>
          <div class="field-box">
      <input type='date' name='date' id='date' onChange={e => setDate(e.target.value)}></input><br></br><br></br>
      <label for='date'>Date</label>
     </div>
     <div class="field-box">
      <input type='time' name='time_s' id='time_s' min="08:00:00" max="18:00:00" step="3600" onChange={e => setTime_s(e.target.value)}></input><br></br><br></br>
      <label for='time_s'>Starting time</label>
      </div>
      <div class="field-box">
      <input type='time' name='time_e' id='time_e' min="09:00" max="19:00"step='3600' onChange={e => setTime_e(e.target.value)}></input><br></br><br></br>
      <label for='time_e'>Ending time</label>
      </div>
       
                    <button type="submit">Submit </button>
                
      </form>
      
      </div>
    ];
  
};

Book.propTypes = {
  setToken: PropTypes.func.isRequired
}


export default Book;
