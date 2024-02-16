import { CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';
import '../styles/superLotoLastItem.css';
import {formatDate} from './dateUtils';

function SuperLotoLastItem({lastSuperLoto}) {

  if (!lastSuperLoto) {
    return (
        <p><CircularProgress /></p>
    );
}
  
  const date = formatDate(lastSuperLoto.Date);
  return (
    <>
        {
        lastSuperLoto.Date ? (
          <p className='date'> Tarih : {date}</p>
          ) : (
            <p><CircularProgress/></p>
          )
        }
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