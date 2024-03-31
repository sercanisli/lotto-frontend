import React from 'react'
import { useEffect, useState } from 'react';
import { useFetchWinningNumbersQuery} from '../store/apis/winningNumbersApi';
import { Typography, CircularProgress} from '@mui/material';
import '../styles/winningNumbers.css'

const WinningNumbers = () => {
    const [id, setId] = useState(1)
    const {data, isError, isFetching} = useFetchWinningNumbersQuery(id);
    if(isFetching || data  === undefined){
        return (
          <CircularProgress className='spinnerWinningNumbers' />
        )
    }
    console.log(data);
  return (
    <div className='winningNumbersDiv'>
      <h3 className='winningNumbersTitle'>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  )
}

export default WinningNumbers