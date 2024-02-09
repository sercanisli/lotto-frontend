import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem, Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='main'>
            <IconButton className='navbarIconButton' href='/'>
                <HomeIcon />
            </IconButton>
            <div className='mainLink'>
                <Link to="/sayisalloto">SAYISAL LOTO</Link>
                <Link to="/superloto">SÜPER LOTO</Link>
                <Link to="/onnumara">ON NUMARA</Link>
                <Link to="/sanstopu">ŞANS TOPU</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar