import { Stack, Button, Typography } from '@mui/material'
import React from 'react'
import { useGetRandomNumbersForSayisalLotoQuery } from '../store/apis/sayisalLotoApi';
import { useState } from 'react';
import '../styles/sayisalLotoGetRandom.css';

function SayisalLotoGetRandom() {

  const { data, isError, isFetching, refetch } = useGetRandomNumbersForSayisalLotoQuery();
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);
  const handleClick = () => {
    setIsLoading(true); 
    refetch().then(() => {
      setIsLoading(false); 
    });
  };

  return (
    <Stack className='sayisalLotoGetRandom'>
      <Stack direction="row" className='numbersSayisalLotoGetRandom'>
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
          {data && data.date ? (
            <p className='dateSayisalLotoGetRandom'>{data.date} tarihinde kazanan numaralar ile %{data.matchRate} oranında eşleşiyor.</p>
          ) : (<p></p>)
          }
        </Typography>
      </Stack>
      <Stack>
        <Button onClick={handleClick} variant='contained'>RASTGELE NUMARA</Button>
      </Stack>
    </Stack>
  )
}

export default SayisalLotoGetRandom