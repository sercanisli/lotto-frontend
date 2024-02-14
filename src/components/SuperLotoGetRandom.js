import { Stack, Button, Skeleton } from '@mui/material'
import React from 'react'
import { useGetRandomNumbersQuery } from '../store/apis/superLotoApi';
import { useState } from 'react';
import '../styles/superLotoGetRandom.css';


function SuperLotoGetRandom() {

  const { data, isError, isFetching, refetch } = useGetRandomNumbersQuery();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true); 
    refetch().then(() => {
      setIsLoading(false); 
    });
  };
  
  return (
    <Stack>
      <Stack direction="row" className='numbers'>
        {data && data.numbers ? (
          data.numbers.map((number, index) => (
            <p key={index}>{number}</p>
          ))
        ) : (
          Array.from({ length: 6 }, (_, index) => (
            <p key={index}></p>
          ))
        )}
      </Stack>
      <Stack>
        <Button onClick={handleClick} variant='contained'>RASTGELE NUMARA</Button>
      </Stack>
    </Stack>
  )
  
}

export default SuperLotoGetRandom