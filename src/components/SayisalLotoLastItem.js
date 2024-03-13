import { CircularProgress, Stack, Typography } from '@mui/material';
import React from 'react';
import '../styles/sayisalLotoLastItem.css';
import {formatDate} from './dateUtils';
import { useGetSayisalLotoLastItemQuery } from '../store/apis/sayisalLotoApi';

function SayisalLotoLastItem() {

  const {data, isError, isFetching} = useGetSayisalLotoLastItemQuery();
  console.log(data);
 
  if (!data) {
    return (
        <p><CircularProgress /></p>
    );
}
  const date = formatDate(data.date);
  return (
    <> 
        <Stack direction="row" className='numbersSayisalLotoLastItem'>
            <p>{data.numbers[0]}</p>
            <p>{data.numbers[1]}</p>
            <p>{data.numbers[2]}</p>
            <p>{data.numbers[3]}</p>
            <p>{data.numbers[4]}</p>
            <p>{data.numbers[5]}</p>
        </Stack>
        {
        data.date ? (
          <p className='dateSayisalLotoLastItem'> Tarih : {date}</p>
          ) : (
            <p><CircularProgress/></p>
          )
        }
    </>
    
  )
}

export default SayisalLotoLastItem