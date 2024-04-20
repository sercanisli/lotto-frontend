import React, { useState } from 'react'
import { IconButton, Stack, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import AdminSayisalLoto from './AdminSayisalLoto';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const UpdateSayisalLoto = () => {
  const [adminSayisalLotoPage, setAdminSayisalLotoPage] = useState(false);
  const [arrowBackIcon, setArrowBackIcon] = useState(true);
  const [numbers, setNumbers] = useState(Array(6).fill(''));
  const [date, setDate] = useState(null);

  const handleClick = () => {
    setAdminSayisalLotoPage(true);
    setArrowBackIcon(false);
  }

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  }

  const handleSave = () => {

  }

  const handleDateChange = (newDate) => {
    setDate(newDate);
  }

  return (
    <Box>
      
      {adminSayisalLotoPage ? (
        <AdminSayisalLoto />
      ): (
        <Box>
          <Stack direction="row" mt={5} mb={2}>
            {[...Array(6)].map((_, index) => (
              <label htmlFor="" key={index}>
                Numara {index + 1}
                <input 
                  type="text" 
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
                value={date}
                onChange={handleDateChange} 
              />
            </LocalizationProvider>
          </Stack>
          <Stack>
            <Button variant='outlined' onClick={handleSave}>Kaydet</Button>
          </Stack>
        </Box>
      )}
    </Box>
  )
}

export default UpdateSayisalLoto