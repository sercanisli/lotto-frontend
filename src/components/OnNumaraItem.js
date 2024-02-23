import React from 'react';
import { Stack, Skeleton, Box, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import image from '../assets/onNumaraLogo.png';
import {formatDate} from './dateUtils';
import '../styles/onNumaraItem.css';


function OnNumaraItem({onNumara}) {
  return (
    <Grid container xs={12} md={12} direction="row"  alignItems="center" className='gridOnNumaraItem'>
      <Card className='cardOnNumaraItem'>
      <CardContent className='numbersDivOnNumaraItem'>
        <Stack className='imageAndDateOnNumaraItem'>
          <Typography className='dateOnNumaraItem'>
            Tarih : {formatDate(onNumara.Date)}
          </Typography>
          <CardMedia className='imageOnNumaraItem' component="img" image={image} />
          
        </Stack>
        <Typography >
          <Stack direction="row" className='numbersOnNumaraItem'>
            {onNumara.Numbers.slice(0, 11).map((number, index) => (
              <p key={index}>{number}</p>
            ))}
          </Stack>
          <Stack direction="row" className='numbersOnNumaraItem'>
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
