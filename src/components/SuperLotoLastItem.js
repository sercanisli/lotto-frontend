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
        <Stack direction="row" className='numbersSuperLotoLastItem'>
            <p>{lastSuperLoto.Numbers[0]}</p>
            <p>{lastSuperLoto.Numbers[1]}</p>
            <p>{lastSuperLoto.Numbers[2]}</p>
            <p>{lastSuperLoto.Numbers[3]}</p>
            <p>{lastSuperLoto.Numbers[4]}</p>
            <p>{lastSuperLoto.Numbers[5]}</p>
        </Stack>
        {
        lastSuperLoto.Date ? (
          <p className='dateSuperLotoLastItem'> Tarih : {date}</p>
          ) : (
            <p><CircularProgress/></p>
          )
        }
    </>
    
  )
}

export default SuperLotoLastItem