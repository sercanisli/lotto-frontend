import React from 'react';
import { Stack, Skeleton, Box, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import image from '../assets/superlotoLogo.jpg';
import '../styles/superLotoItem.css';
import {formatDate} from './dateUtils';
 
function SuperLotoItem({superLoto}) {
  return (
    <Grid container xs={12} md={6} direction="row"  alignItems="center" className='grid'>
      <Card className='card'>
      <CardContent>
        <Stack direction="row" className='imageAndDate'>
          <CardMedia className='image' component="img" image={image} />
          <Typography className='date'>
            Tarih : {formatDate(superLoto.Date)}
          </Typography>
        </Stack>
        <Typography >
          <Stack direction="row" className='numbers'>
            <p>{superLoto.Numbers[0]}</p>
            <p>{superLoto.Numbers[1]}</p>
            <p>{superLoto.Numbers[2]}</p>
            <p>{superLoto.Numbers[3]}</p>
            <p>{superLoto.Numbers[4]}</p>
            <p>{superLoto.Numbers[5]}</p>
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