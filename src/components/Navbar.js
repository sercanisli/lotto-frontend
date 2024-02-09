import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem, Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import '../styles/navbar.css'

function Navbar() {
  return (
    <AppBar>
        <Toolbar>
            <IconButton className='navbarIconButton'>
                <HomeIcon />
            </IconButton>
            <Stack direction='row' className='navbarStackContainer'>
                <a href="/sayisalloto">
                    <Button className='navbarButton'>Sayisal Loto</Button>
                </a>
                <a href="/superloto">
                    <Button className='navbarButton'>Süper Loto</Button>
                </a>
                <a href="/onnumara" >
                    <Button className='navbarButton'>On Numara</Button>
                </a>
                <a href="/sanstopu" >
                    <Button className='navbarButton'>Şans Topu</Button>
                </a>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar