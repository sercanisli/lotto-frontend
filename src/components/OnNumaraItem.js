import React from 'react';
import { Stack, Skeleton, Box, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import image from '../assets/onNumaraLogo.png';
import {formatDate} from './dateUtils';


function OnNumaraItem({onNumara}) {
  return (
    <Grid container xs={12} md={12} direction="row"  alignItems="center" className='grid'>
      <Card className='card'>
      <CardContent>
        <Stack direction="row" className='imageAndDate'>
          <CardMedia className='image' component="img" image={image} />
          <Typography className='date'>
            Tarih : {formatDate(onNumara.Date)}
          </Typography>
        </Stack>
        <Typography >
          <Stack direction="row" className='numbers'>
            {onNumara.Numbers.slice(0, 11).map((number, index) => (
              <p key={index}>{number}</p>
            ))}
          </Stack>
          <Stack direction="row" className='numbers'>
            {onNumara.Numbers.slice(11).map((number, index) => (
              <p key={index + 11}>{number}</p>
            ))}
          </Stack>
        </Typography>
      </CardContent>
    </Card>
    </Grid>
  )
}

export default OnNumaraItem
