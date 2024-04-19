import React, { useState } from 'react';
import { Stack, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import '../styles/adminSayisalLotoItem.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatDate } from './dateUtils';
import UpdateSayisalLoto from './UpdateSayisalLoto';

function AdminSayisalLotoItem({ sayisalLoto }) {
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const handleUpdateClick = () => {
        setIsUpdateMode(true);
    };

    const handleCancelUpdate = () => {
        setIsUpdateMode(false);
    };

    return (
        <>
            {isUpdateMode ? (
                <UpdateSayisalLoto onCancelUpdate={handleCancelUpdate} />
            ) : (
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
                                    {sayisalLoto.Numbers.map((number, index) => (
                                        <p key={index}>{number}</p>
                                    ))}
                                </Stack>
                            </Typography>
                            <Stack direction="row" className='buttonsAdminSayisalLotoItem'>
                                <Button variant='contained' startIcon={<CloudUploadIcon />} onClick={handleUpdateClick}>GÜNCELLE</Button>
                                <Button variant='contained' startIcon={<DeleteIcon />} color="error">Sil</Button>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            )}
        </>
    );
}

export default AdminSayisalLotoItem;
