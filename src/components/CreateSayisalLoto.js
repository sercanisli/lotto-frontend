import React, { useState } from 'react'
import { IconButton, Stack, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import AdminSayisalLoto from './AdminSayisalLoto';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../styles/createSayisalLoto.css';

const CreateSayisalLoto = () => {
    const [adminSayisalLotoPage, setAdminSayisalLotoPage] = useState(false);
    const [arrowBackIcon, setArrowBackIcon] = useState(true);

    const handleClick = () => {
        setAdminSayisalLotoPage(true);
        setArrowBackIcon(false);
    }
  return (
    <Box>
        {
            arrowBackIcon ? (
                <IconButton onClick={handleClick}>
                    <ArrowBackIcon />
                </IconButton>
            ) : (
                <>
                </>
            )
        }
        {
            adminSayisalLotoPage ? (
                <AdminSayisalLoto />
            ) : (
                <Box >
                    <Stack direction="row" mt={5} mb={2} >
                        <label htmlFor="" className='createSayisalLotoLabels'>Numara 1</label>
                        <label htmlFor="" className='createSayisalLotoLabels'>Numara 2</label>
                        <label htmlFor="" className='createSayisalLotoLabels'>Numara 3</label>
                        <label htmlFor="" className='createSayisalLotoLabels'>Numara 4</label>
                        <label htmlFor="" className='createSayisalLotoLabels'>Numara 5</label>
                        <label htmlFor="" className='createSayisalLotoLabels'>Numara 6</label>
                    </Stack>
                    <Stack direction="row" mb={5}>
                        <input type="text" className='createSayisalLotoNumbersInput' />
                        <input type="text" className='createSayisalLotoNumbersInput' />
                        <input type="text" className='createSayisalLotoNumbersInput' />
                        <input type="text" className='createSayisalLotoNumbersInput' />
                        <input type="text" className='createSayisalLotoNumbersInput' />
                        <input type="text" className='createSayisalLotoNumbersInput' />
                    </Stack>
                    <Stack direction="row" mt={5} mb={2}>
                        <h6>Tarih</h6>
                    </Stack>
                    <Stack mb={5}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker className='createSayisalLotoDatePicker'/>
                        </LocalizationProvider>
                    </Stack>
                    <Stack className='createSayisalLotoButton'>
                        <Button variant='contained'>Kaydet</Button>
                    </Stack>
                </Box>
            )
        }
    </Box>
  )
}

export default CreateSayisalLoto