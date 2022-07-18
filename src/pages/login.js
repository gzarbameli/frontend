import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://ec2-44-205-128-120.compute-1.amazonaws.com:30001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = ({ setToken }) => {
    const [matricula, setMatricula] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            matricula,
            password
        });
        console.log(matricula)
        setToken(token);
        console.log(token.token)
    }

    return [<img src={require('../images/logo.png')} alt='logo' width="280" height="100"></img>,
        <div className="login-box">
            <h2> Login</h2>
            <form onSubmit={handleSubmit}>
            <div class="user-box">
           <input type="text" name="" required="" onChange={e => setMatricula(e.target.value)}></input>
         <label>Matricula</label>
        </div> 
        <div class="user-box">
       <input type="password" name="" required="" onChange={e => setPassword(e.target.value)}></input>
        <label>Password</label>
       </div>
 
                <div>
                    <button type="submit">Submit </button>
                </div>
            </form>
        </div>


];
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
