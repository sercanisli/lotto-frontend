import React, { useState } from 'react';
import { useAxiosForSayisalLotoPagination } from './axiosComponents/axiosForSayisalLotoPagination';
import { useFetchSayisalLotoQuery } from '../store/apis/sayisalLotoApi';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { CircularProgress} from '@mui/material';
import {Typography, Grid } from '@mui/material';
import AdminSayisalLotoItem from './AdminSayisalLotoItem';
import '../styles/adminSayisalLoto.css';

const AdminSayisalLoto = () => {

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
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography className='headlinesAdminSayisalLoto' variant='h5' >Çekilişler</Typography>
          <Item className='itemsAdminSayisalLoto'>
            {
              data.map((sayisalLoto) => {
                return <AdminSayisalLotoItem key={sayisalLoto.id} sayisalLoto={sayisalLoto} />
              })
            }
          </Item>
          <Pagination className='paginateAdminSayisalLoto' count={totalPage} color='primary' page={selectedPage} onChange={handlePageChange}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AdminSayisalLoto