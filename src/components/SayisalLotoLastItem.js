import { CircularProgress, Stack, Typography, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import '../styles/sayisalLotoLastItem.css';
import {formatDate} from './dateUtils';
import { useGetSayisalLotoLastItemQuery } from '../store/apis/sayisalLotoApi';
import image from '../assets/sayisalLoto.png';

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
        <Stack direction="row" className='imageAndDate'>
            <CardContent>
                <CardMedia className='imageSayisalLotoLastItem' component="img" image={image} />
            </CardContent>
            <Stack className='dateSayisalLotoLastItem'>
                {
                  data.date ? (
                    <p > Tarih : {date}</p>
                    ) : (
                      <p><CircularProgress/></p>
                    )
                }
            </Stack>
          </Stack>
    </>
    
  )
}

export default SayisalLotoLastItem