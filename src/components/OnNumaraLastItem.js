import { CircularProgress, Stack, Typography, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import '../styles/onNumaraLastItem.css';
import {formatDate} from './dateUtils';
import { use } from '../store/apis/onNumaraApi';
import { useGetOnNumaraLastItemQuery } from '../store/apis/onNumaraApi';
import image from'../assets/onNumaraLogo.png';

function OnNumaraLastItem() {
  const {data, isError, isFetching} = useGetOnNumaraLastItemQuery();
  console.log(data);
 
  if (!data) {
    return (
        <p><CircularProgress /></p>
    );
}
    const date = formatDate(data.date);
    return (
      <>
          <Typography>
            <Stack direction="row" className='numbersOnNumaraLastItem'>
              {data.numbers.slice(0, 11).map((number, index) => (
                <p key={index}>{number}</p>
              ))}
            </Stack>
            <Stack direction="row" className='numbersOnNumaraLastItem'>
              {data.numbers.slice(11).map((number, index) => (
                <p key={index + 11}>{number}</p>
              ))}
            </Stack>
          </Typography>
          <Stack direction="row" className='imageAndDate'>
            <CardContent>
                <CardMedia className='imageOnNumaraLastItem' component="img" image={image} />
            </CardContent>
            <Stack className='dateOnNumaraLastItem'>
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

export default OnNumaraLastItem