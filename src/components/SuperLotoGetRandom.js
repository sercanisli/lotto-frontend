import { Stack, Button } from '@mui/material'
import React from 'react'
import { useGetRandomNumbersQuery } from '../store/apis/superLotoApi';
import { useState } from 'react';


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
      <Stack>
        
      </Stack>
      <Stack>
        <Button onClick={handleClick} variant='contained'>RASTGELE NUMARA</Button>
      </Stack>
    </Stack>
  )
}

export default SuperLotoGetRandom