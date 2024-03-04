import React from 'react';
import { Stack, Skeleton, Box, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import {formatDate} from './dateUtils';
import image from '../assets/sansTopuLogo.png'
import '../styles/sansTopuItem.css';

function SansTopuItem({sansTopu}) {
  return (
    <Grid container xs={12} md={6} direction="row"  alignItems="center" className='gridSansTopuItem'>
      <Card className='cardSansTopuItem'>
        <CardContent>
          <Stack direction="row" className='imageAndDateSansTopuItem'>
            <CardMedia className='imageSansTopuItem' component="img" image={image} />
            <Typography className='dateSansTopuItem'>
              Tarih : {formatDate(sansTopu.Date)}
            </Typography>
          </Stack>
          <Typography >
            <Stack className='sansTopuItem' direction="row">
              <Stack direction="row" className='numbersSansTopuItem'>
                <p>{sansTopu.Numbers[0]}</p>
                <p>{sansTopu.Numbers[1]}</p>
                <p>{sansTopu.Numbers[2]}</p>
                <p>{sansTopu.Numbers[3]}</p>
                <p>{sansTopu.Numbers[4]}</p>
              </Stack>
              <Stack direction="row">
                <p className='plusSansTopuItem'>+</p>
                <p className='plusNumberSansTopuItem'>{sansTopu.PlusNumber}</p>
              </Stack>
            </Stack>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SansTopuItem