import React, { useState } from 'react';
import { useAxiosForSayisalLotoPagination } from './axiosComponents/axiosForSayisalLotoPagination';
import { useFetchSayisalLotoQuery } from '../store/apis/sayisalLotoApi';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { CircularProgress} from '@mui/material';
import { Stack, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import {formatDate} from './dateUtils';
import image from '../assets/sayisalLoto.png'

function AdminSayisalLotoItem() {

  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (event, page) => {
    setSelectedPage(page);
  };

  const page = {
    pageSize:10,
    pageNumber:selectedPage
  }

  const totalPage = useAxiosForSayisalLotoPagination(page);

  console.log(totalPage)

  const {data, isError, isFething} = useFetchSayisalLotoQuery(page);
  if(isFething || data === undefined) {
    return (
      <Box style={{ width: '100%', height: '100vh' }}>
        <CircularProgress className='spinnerAdminSayisalLoto' />
      </Box>
    )
  }

  console.log(data);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>AdminSayisalLotoItem</div>
  )
}

export default AdminSayisalLotoItem