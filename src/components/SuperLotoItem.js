import React from 'react';
import { Stack, Skeleton, Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import image from '../assets/superlotoLogo.jpg';
import '../styles/superLotoItem.css';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
}

function SuperLotoItem({superLoto}) {
  return (
    <Card className='card'>
      <CardMedia className='image' component="img" image={image} />
      <CardContent>
        <Typography>
          {formatDate(superLoto.Date)}
        </Typography>
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

  )
}
{/* <Skeleton
            width={800}
            height={250}
            animation='wave'
         /> */}
export default SuperLotoItem