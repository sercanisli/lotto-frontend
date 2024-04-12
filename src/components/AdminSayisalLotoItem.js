import React from 'react'
import { Stack, Skeleton, Box, Card, CardActions, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import image from '../assets/sayisalLoto.png';
import '../styles/sayisalLotoItem.css';
import {formatDate} from './dateUtils';

function AdminSayisalLotoItem({sayisalLoto}) {
  return (
    <Grid container xs={12} md={6} direction="row" alignItems="center" className='gridAdminSayisalLotoItem'>
        <Card className='cardAdminSayisalLotoItem'>
            <CardContent>
                <Stack direction="row" className='imageAndDateAdminSayisalLotoItem'>
                    <Typography className='dateAdminSayisalLotoItem'>
                        Tarih: {formatDate(sayisalLoto.Date)}
                    </Typography>
                </Stack>
                <Typography>
                    <Stack direction="row" className='numbersAdminSayisalLotoItem'>
                        <p>{sayisalLoto.Numbers[0]}</p>
                        <p>{sayisalLoto.Numbers[1]}</p>
                        <p>{sayisalLoto.Numbers[2]}</p>
                        <p>{sayisalLoto.Numbers[3]}</p>
                        <p>{sayisalLoto.Numbers[4]}</p>
                        <p>{sayisalLoto.Numbers[5]}</p>
                    </Stack>
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  )
}

export default AdminSayisalLotoItem