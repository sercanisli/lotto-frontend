import React from 'react'
import { Stack, Card, CardContent, Typography, Grid } from '@mui/material';
import '../styles/adminSayisalLotoItem.css';
import {formatDate} from './dateUtils';

function AdminSayisalLotoItem({sayisalLoto}) {
  return (
    <Grid container xs={12} md={6} direction="row" alignItems="center" className='gridAdminSayisalLotoItem'>
        <Card className='cardAdminSayisalLotoItem'>
            <CardContent>
                <Stack direction="row" className='dateStackAdminSayisalLotoItem'>
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