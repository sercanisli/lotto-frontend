import React from 'react'
import { useEffect, useState } from 'react';
import { useFetchWinningNumbersQuery} from '../store/apis/winningNumbersApi';

const WinningNumbers = () => {
    const [id, setId] = useState(1)
    const {data, isError, isFetching} = useFetchWinningNumbersQuery(id);
    console.log(data);
  return (
    <div>WinningNumbers</div>
  )
}

export default WinningNumbers