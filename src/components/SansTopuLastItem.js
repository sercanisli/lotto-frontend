import { CardContent, CircularProgress, Stack, CardMedia } from '@mui/material';
import React from 'react';
import {formatDate} from './dateUtils';
import '../styles/sansTopuLastItem.css'
import { useGetSansTopuLastItemQuery } from '../store/apis/sansTopuApi';
import image from '../assets/sansTopuLogo.png';

function SansTopuLastItem() {
  const {data, isError, isFetching} = useGetSansTopuLastItemQuery();
  console.log(data);
 
  if (!data) {
    return (
        <p><CircularProgress /></p>
    );
  }
  
  const date = formatDate(data.date);
  
  return (
    <>
      <Stack className='sansTopuLastItem' direction="row">
        <Stack direction="row" className='numbersSansTopuLastItem'>
              <p>{data.numbers[0]}</p>
              <p>{data.numbers[1]}</p>
              <p>{data.numbers[2]}</p>
              <p>{data.numbers[3]}</p>
              <p>{data.numbers[4]}</p>
        </Stack>
        <Stack direction="row">
          <p className='plusSansTopuLastItem'>+</p>
          <p className='plusNumberSansTopuLastItem'>{data.plusNumber}</p>
        </Stack>
      </Stack>
      <Stack direction="row" className='imageAndDate'>
        <CardContent>
            <CardMedia className='imageSansTopuLastItem' component="img" image={image} />
        </CardContent>
        <Stack className='dateSansTopuLastItem'>
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

export default SansTopuLastItem