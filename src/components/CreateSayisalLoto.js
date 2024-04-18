import React, { useState } from 'react';
import {useCreateSayisalLotoMutation} from '../store/apis/sayisalLotoApi';
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
    const [numbers, setNumbers] = useState(Array(6).fill(''));
    const [date, setDate] = useState(null);

    const [createSayisalLoto, { isLoading, isError, isSuccess, error }] = useCreateSayisalLotoMutation();

    const handleClick = () => {
        setAdminSayisalLotoPage(true);
        setArrowBackIcon(false);
    }

    const handleNumberChange = (index, value) => {
        const newNumbers = [...numbers];
        newNumbers[index] = value;
        setNumbers(newNumbers);
    }

    const handleDateChange = (newDate) => {
        setDate(newDate);
    }

    const handleSave = async () => {
        let formattedDate = null;
    
        if (date) {
            const dateObject = new Date(date); 
            const year = dateObject.getFullYear();
            const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
            const day = dateObject.getDate().toString().padStart(2, '0');
            formattedDate = `${year}-${month}-${day}`;
        }
    
        const sayisalLoto = {
            numbers: numbers.map(num => parseInt(num)),
            date: formattedDate
        };
    
        console.log(sayisalLoto);

        try {
            await createSayisalLoto(sayisalLoto).unwrap();
            setNumbers(Array(6).fill(''));
            setDate(null);
        } catch (error) {
            console.error('Create operation failed:', error);
        }
    }
    
    

    return (
        <Box>
            {arrowBackIcon ? (
                <IconButton onClick={handleClick}>
                    <ArrowBackIcon />
                </IconButton>
            ) : null}
            {adminSayisalLotoPage ? (
                <AdminSayisalLoto />
            ) : (
                <Box>
                    <Stack direction="row" mt={5} mb={2}>
                        {[...Array(6)].map((_, index) => (
                            <label key={index} htmlFor="" className='createSayisalLotoLabels'>
                                Numara {index + 1}
                                <input
                                    type="text"
                                    className='createSayisalLotoNumbersInput'
                                    value={numbers[index]}
                                    onChange={(e) => handleNumberChange(index, e.target.value)}
                                />
                            </label>
                        ))}
                    </Stack>
                    <Stack direction="row" mt={5} mb={2}>
                        <h6>Tarih</h6>
                    </Stack>
                    <Stack mb={5}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                className='createSayisalLotoDatePicker'
                                value={date}
                                onChange={handleDateChange}
                            />
                        </LocalizationProvider>
                    </Stack>
                    <Stack className='createSayisalLotoButton'>
                        <Button variant='contained' onClick={handleSave}>Kaydet</Button>
                    </Stack>
                </Box>
            )}
        </Box>
    );
}

export default CreateSayisalLoto;
