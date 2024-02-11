import React from 'react';
import { Stack, Skeleton, Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import image from '../assets/superlotoLogo.jpg';
import '../styles/superLotoItem.css';

function SuperLotoItem() {
  return (
    <Card className='card'>
      <CardMedia className='image' component="img" image={image} />
      <CardContent>
        <Typography>
          Tarih
        </Typography>
       <Typography >
        <Stack direction="row" >
          Rakamlar
        </Stack>
       </Typography>
      </CardContent>
    </Card>

  )
}
{/* <Skeleton
            width={800}
            height={250}
            animation='wave'
         /> */}
export default SuperLotoItem