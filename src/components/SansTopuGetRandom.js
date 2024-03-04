import { Stack, Button, Typography } from '@mui/material'
import React from 'react'
import { useGetRandomNumbersForSansTopuQuery } from '../store/apis/sansTopuApi';
import { useState } from 'react';
import '../styles/sansTopuGetRandom.css'

function SansTopuGetRandom() {

  const { data, isError, isFetching, refetch } = useGetRandomNumbersForSansTopuQuery();
  const [isLoading, setIsLoading] = useState(false);
  console.log(data);
  const handleClick = () => {
    setIsLoading(true); 
    refetch().then(() => {
      setIsLoading(false); 
    });
  };


  return (
    <Stack >
      <Stack className='sansTopuGetRandom' direction="row">
        <Stack direction="row" className='numbersSansTopuGetRandom'>
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
            {data && data.plusNumber ? (
              <Stack direction="row">
                <p className='plusSansTopuGetRandom'>+</p>
                <p className='plusNumberSansTopuGetRandom'>{data.plusNumber} </p>
              </Stack>
            ) : (<p></p>)
            }
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography>
          {data && data.date ? (
            <p className='dateSansTopuGetRandom'>{data.date} tarihinde kazanan numaralar ile %{data.matchRate} oranında eşleşiyor.</p>
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

export default SansTopuGetRandom