import { CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';
import {formatDate} from './dateUtils';

function SansTopuLastItem({lastSansTopu}) {

  if (!lastSansTopu) {
    return (
        <p><CircularProgress /></p>
    );
}

  const date = formatDate(lastSansTopu.Date);
  
  return (
    <>
      <Stack direction="row" className='numbersSayisalLotoLastItem'>
            <p>{lastSansTopu.Numbers[0]}</p>
            <p>{lastSansTopu.Numbers[1]}</p>
            <p>{lastSansTopu.Numbers[2]}</p>
            <p>{lastSansTopu.Numbers[3]}</p>
            <p>{lastSansTopu.Numbers[4]}</p>
            <p>+</p>
            <p>{lastSansTopu.PlusNumber}</p>
        </Stack>
        {
        lastSansTopu.Date ? (
          <p className='dateSayisalLotoLastItem'> Tarih : {date}</p>
          ) : (
            <p><CircularProgress/></p>
          )
        }
    </>
  )
}

export default SansTopuLastItem