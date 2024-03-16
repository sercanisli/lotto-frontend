import { CircularProgress, Stack, Typography, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import '../styles/superLotoLastItem.css';
import {formatDate} from './dateUtils';
import { useGetSuperLotoLastItemQuery } from '../store/apis/superLotoApi';
import image from '../assets/superlotoLogo.jpg';

function SuperLotoLastItem() {

  const {data, isError, isFetching} = useGetSuperLotoLastItemQuery();
  console.log(data);

  if (!data) {
    return (
        <p><CircularProgress /></p>
    );
}
  
  const date = formatDate(data.date);
  return (
    <>
        <Stack direction="row" className='numbersSuperLotoLastItem'>
            <p>{data.numbers[0]}</p>
            <p>{data.numbers[1]}</p>
            <p>{data.numbers[2]}</p>
            <p>{data.numbers[3]}</p>
            <p>{data.numbers[4]}</p>
            <p>{data.numbers[5]}</p>
        </Stack>
        <Stack direction="row" className='imageAndDate'>
            <CardContent>
                <CardMedia className='imageSuperLotoLastItem' component="img" image={image} />
            </CardContent>
            <Stack className='dateSuperLotoLastItem'>
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

export default SuperLotoLastItem