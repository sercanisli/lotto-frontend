import React from 'react';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import LoginIcon from '@mui/icons-material/Login';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link className='navbar-link' to="/"> 
          <IconButton className="navbar-logo-color" >
            <HomeIcon  />
          </IconButton>
        </Link>
      </div>
      <div className="navbar-links">
        <Link className="navbar-link" to="/sayisalloto">SAYISAL LOTO</Link>
        <Link className="navbar-link" to="/superloto">SÜPER LOTO</Link>
        <Link className="navbar-link" to="/onnumara">ON NUMARA</Link>
        <Link className="navbar-link" to="/sanstopu">ŞANS TOPU</Link>
      </div>
      <div className='navbar-login'>
        <Link className='navbar-link' to="/login">
          <IconButton className='navbar-logo-color'>
            <LoginIcon />
          </IconButton>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
