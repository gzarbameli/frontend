//import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Book from './pages/book';
import MyReservations from './pages/myreservations';
import About from './pages/about';
import Login from './pages/login';
import background from './images/bg.jpg'

function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };
  const [token, setToken] = useState(getToken());
  const saveToken = userToken => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      position: 'fixed',
      minWidth: '100%',
      minHeight: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/book' element={<Book />} />
          <Route path='/myreservations' element={<MyReservations />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
