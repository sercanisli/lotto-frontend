import { CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';
import {formatDate} from './dateUtils';
import '../styles/sansTopuLastItem.css'

function SansTopuLastItem({lastSansTopu}) {

  if (!lastSansTopu) {
    return (
        <p><CircularProgress /></p>
    );
}

  const date = formatDate(lastSansTopu.Date);
  
  return (
    <>
    <Stack className='sansTopuLastItem' direction="row">
      <Stack direction="row" className='numbersSansTopuLastItem'>
            <p>{lastSansTopu.Numbers[0]}</p>
            <p>{lastSansTopu.Numbers[1]}</p>
            <p>{lastSansTopu.Numbers[2]}</p>
            <p>{lastSansTopu.Numbers[3]}</p>
            <p>{lastSansTopu.Numbers[4]}</p>
      </Stack>
      <Stack direction="row">
        <p className='plusSansTopuLastItem'>+</p>
        <p className='plusNumberSansTopuLastItem'>{lastSansTopu.PlusNumber}</p>
      </Stack>
    </Stack>
      
        {
        lastSansTopu.Date ? (
          <p className='dateSansTopuLastItem'> Tarih : {date}</p>
          ) : (
            <p><CircularProgress/></p>
          )
        }
    </>
  )
}

export default SansTopuLastItem