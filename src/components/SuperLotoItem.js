import React from 'react';
import { Stack, CircularProgress, Skeleton, Box, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import image from '../assets/superlotoLogo.jpg';
import '../styles/superLotoItem.css';
import {formatDate} from './dateUtils';
import { useGetSuperLotoLastItemQuery } from '../store/apis/superLotoApi';
  
function SuperLotoItem({superLoto}) {

  return (

    <Grid container xs={12} md={6} direction="row"  alignItems="center" className='gridSuperLotoItem'>
      <Card className='cardSuperLotoItem'>
      <CardContent>
        <Stack direction="row" className='imageAndDateSuperLotoItem'>
          <CardMedia className='imageSuperLotoItem' component="img" image={image} />
          <Typography className='dateSuperLotoItem'>
            Tarih : {formatDate(superLoto.Date)}
          </Typography>
        </Stack>
        <Typography >
          <Stack direction="row" className='numbersSuperLotoItem'>
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
export default SuperLotoItem