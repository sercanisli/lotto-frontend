import React from 'react'
import { useEffect, useState } from 'react';
import { useFetchWinningNumbersQuery} from '../store/apis/winningNumbersApi';
import { Typography, CircularProgress} from '@mui/material';

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
    <div>WinningNumbers</div>
  )
}

export default WinningNumbers