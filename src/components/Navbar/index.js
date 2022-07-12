import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.png')} alt='logo' width="280" height="100" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/book' activeStyle>
            Book Your Seat!
          </NavLink>
          <NavLink to='/myreservations' activeStyle>
            My Reservations
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;