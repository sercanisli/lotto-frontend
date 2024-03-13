import React from 'react';
import { Stack, CircularProgress, Skeleton, Box, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import image from '../assets/superlotoLogo.jpg';
import '../styles/superLotoItem.css';
import {formatDate} from './dateUtils';
import { useGetSuperLotoLastItemQuery } from '../store/apis/superLotoApi';
  
function SuperLotoItem({}) {

  const {data, isError, isFetching} = useGetSuperLotoLastItemQuery();
  console.log(data);
 
  if (!data) {
    return (
        <p><CircularProgress /></p>
    );
}

  return (

    <Grid container xs={12} md={6} direction="row"  alignItems="center" className='gridSuperLotoItem'>
      <Card className='cardSuperLotoItem'>
      <CardContent>
        <Stack direction="row" className='imageAndDateSuperLotoItem'>
          <CardMedia className='imageSuperLotoItem' component="img" image={image} />
          <Typography className='dateSuperLotoItem'>
            Tarih : {formatDate(data.date)}
          </Typography>
        </Stack>
        <Typography >
          <Stack direction="row" className='numbersSuperLotoItem'>
            <p>{data.numbers[0]}</p>
            <p>{data.numbers[1]}</p>
            <p>{data.numbers[2]}</p>
            <p>{data.numbers[3]}</p>
            <p>{data.numbers[4]}</p>
            <p>{data.numbers[5]}</p>
          </Stack>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    

  )
}
{/* <Skeleton
            width={800}
            height={250}
            animation='wave'
         /> */}
export default SuperLotoItem