import React, { useState, useEffect } from 'react';
import { Stack, Button } from '@mui/material';
import {useFetchOneSayisalLotoQuery} from '../store/apis/sayisalLotoApi'
import Box from '@mui/material/Box';
import AdminSayisalLoto from './AdminSayisalLoto';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../styles/updateSayisalLoto.css';
import './dateUtils';
// import {stringToDate} from './stringToDate';
import { formatDate } from './dateUtils';

const UpdateSayisalLoto = ({ sayisalLoto }) => {
  const [adminSayisalLotoPage, setAdminSayisalLotoPage] = useState(false);
  const [numbers, setNumbers] = useState(Array(6).fill(''));
  const [date, setDate] = useState(null);


  useEffect(() => {
    if (sayisalLoto) {
      setNumbers(sayisalLoto.Numbers || Array(6).fill('')); 
      // setDate(sayisalLoto.Date || null); 
    }
  }, [sayisalLoto]);

  useEffect(() => {
    if (numbers.every(num => num !== '') && date !== null) {
      setAdminSayisalLotoPage(true);
    }
  }, [numbers, date]);

  const handleClick = () => {
    setAdminSayisalLotoPage(true);
  }

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  }

  const handleSave = () => {
    // Kaydetme işlemleri burada yapılabilir
  }

  const handleDateChange = (newDate) => {
    setDate(formatDate(newDate));
  }

  console.log(sayisalLoto);
  console.log(numbers);
  console.log(date);

  return (
    <Box>
      {adminSayisalLotoPage ? (
        <AdminSayisalLoto />
      ) : (
        <Box>
          <Stack direction="row" mt={5} mb={2}>
            {[...Array(6)].map((_, index) => (
              <label htmlFor="" key={index} className='updateSayisalLotoLabels'>
                Numara {index + 1}
                <input 
                  type="text" 
                  value={numbers[index]}
                  className='updateSayisalLotoNumbersInput'
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
                className='updateSayisalLotoDatePicker'
                value={date}
                onChange={handleDateChange} 
              />
            </LocalizationProvider>
          </Stack>
          <Stack className='updateSayisalLotoButton'>
            <Button variant='outlined' onClick={handleSave}>Kaydet</Button>
          </Stack>
        </Box>
      )}
    </Box>
  )
}

export default UpdateSayisalLoto;
