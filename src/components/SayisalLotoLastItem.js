import { CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';
import '../styles/sayisalLotoLastItem.css';
import {formatDate} from './dateUtils';

function SayisalLotoLastItem({lastSayisalLoto}) {
  if (!lastSayisalLoto) {
    return (
        <p><CircularProgress /></p>
    );
}
  const date = formatDate(lastSayisalLoto.Date);
  return (
    <>
        <Stack direction="row" className='numbers'>
            <p>{lastSayisalLoto.Numbers[0]}</p>
            <p>{lastSayisalLoto.Numbers[1]}</p>
            <p>{lastSayisalLoto.Numbers[2]}</p>
            <p>{lastSayisalLoto.Numbers[3]}</p>
            <p>{lastSayisalLoto.Numbers[4]}</p>
            <p>{lastSayisalLoto.Numbers[5]}</p>
        </Stack>
        {
        lastSayisalLoto.Date ? (
          <p className='date'> Tarih : {date}</p>
          ) : (
            <p><CircularProgress/></p>
          )
        }
    </>
    
  )
}

export default SayisalLotoLastItem