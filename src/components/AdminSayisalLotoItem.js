import React from 'react'
import { Stack, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import '../styles/adminSayisalLotoItem.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
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
                    <Typography className='idAdminSayisalLotoItem'>
                        Id: {sayisalLoto.Id}
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
                <Stack direction="row" className='buttonsAdminSayisalLotoItem'>
                    <Button variant='contained' startIcon={<CloudUploadIcon />}>Güncelle</Button>
                    <Button variant='contained' startIcon={<DeleteIcon />} color="error">Sil</Button>
                </Stack>
            </CardContent>
        </Card>
    </Grid>
  )
}

export default AdminSayisalLotoItem