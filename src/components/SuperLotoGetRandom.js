import { Stack, Button, Skeleton, Typography } from '@mui/material'
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
  console.log(data);
  
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
        <Typography>
          <p>{data.date} tarihinde kazanan numaralar ile %{data.matchRate} oranında eşleşiyor.</p>
        </Typography>
      </Stack>
      <Stack>
        <Button onClick={handleClick} variant='contained'>RASTGELE NUMARA</Button>
      </Stack>
    </Stack>
  )
  
}

export default SuperLotoGetRandom