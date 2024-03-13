import { CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';
import '../styles/onNumaraLastItem.css';
import {formatDate} from './dateUtils';
import { use } from '../store/apis/onNumaraApi';


function OnNumaraLastItem({lastOnNumara}) {
    if (!lastOnNumara) {
      return (
          <p><CircularProgress /></p>
      );
  }
    const date = formatDate(lastOnNumara.Date);
    return (
      <>
          <Typography>
            <Stack direction="row" className='numbersOnNumaraLastItem'>
              {lastOnNumara.Numbers.slice(0, 11).map((number, index) => (
                <p key={index}>{number}</p>
              ))}
            </Stack>
            <Stack direction="row" className='numbersOnNumaraLastItem'>
              {lastOnNumara.Numbers.slice(11).map((number, index) => (
                <p key={index + 11}>{number}</p>
              ))}
            </Stack>
          </Typography>
          {
          lastOnNumara.Date ? (
            <p className='dateOnNumaraLastItem'> Tarih : {date}</p>
            ) : (
              <p><CircularProgress/></p>
            )
          }
      </>
      
    )
}

export default OnNumaraLastItem