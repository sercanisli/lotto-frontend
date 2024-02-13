import { Stack, Typography } from '@mui/material';
import React from 'react';
import '../styles/superLotoLastItem.css';

function SuperLotoLastItem({lastSuperLoto}) {
    console.log(lastSuperLoto);
  return (
    <>
        <p>{lastSuperLoto.Date}</p>
        <Stack direction="row" className='numbers'>
            <p>{lastSuperLoto.Numbers[0]}</p>
            <p>{lastSuperLoto.Numbers[1]}</p>
            <p>{lastSuperLoto.Numbers[2]}</p>
            <p>{lastSuperLoto.Numbers[3]}</p>
            <p>{lastSuperLoto.Numbers[4]}</p>
            <p>{lastSuperLoto.Numbers[5]}</p>
        </Stack>
    </>
    
  )
}

export default SuperLotoLastItem