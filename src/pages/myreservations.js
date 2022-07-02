import React, {useState, useEffect} from 'react';
import axios from 'axios'

function MyReservations() {
	const [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("http://ec2-44-205-128-120.compute-1.amazonaws.com:30001/home").then(function(response) {
			setHome(response.data)
		})
	}, [])

	return (
		<div 
    className="App"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }}>
			<h1>{home}</h1>
		</div>
	)
}

export default MyReservations;