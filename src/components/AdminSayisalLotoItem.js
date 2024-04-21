import React, { useState } from 'react';
import { Stack, Card, CardContent, Typography, Grid, Button, Modal, Box, IconButton } from '@mui/material';
import '../styles/adminSayisalLotoItem.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatDate } from './dateUtils';
import UpdateSayisalLoto from './UpdateSayisalLoto';

function AdminSayisalLotoItem({ sayisalLoto }) {
    const [updatePage, setUpdatePage] = useState(false);

    const handleUpdateClick = () => {
        setUpdatePage(true);
    };

    const handleCloseUpdatePage = () => {
        setUpdatePage(false);
    };

    return (
        <>
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
            <Modal
                open={updatePage}
                onClose={handleCloseUpdatePage}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <UpdateSayisalLoto sayisalLoto={sayisalLoto}/>
                </Box>
            </Modal>
        </>
    );
}

export default AdminSayisalLotoItem;
