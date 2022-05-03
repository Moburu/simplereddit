import './Header.css';
import React from 'react';
import logo from './logo.png';

const Header = props => {
  return (
    <div id="Header">
      <img className='logo' src={logo} alt="blue Reddit logo" />
      <h1>simplereddit</h1>
    </div>
  )
}

export default Header
