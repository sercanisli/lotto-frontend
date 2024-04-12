import React, { useState } from 'react';
import { useAxiosForSayisalLotoPagination } from './axiosComponents/axiosForSayisalLotoPagination';
import { useFetchSayisalLotoQuery } from '../store/apis/sayisalLotoApi';
import Box from '@mui/material/Box';
import { Typography, CircularProgress} from '@mui/material';


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

  const {data, isError, isFething} = useFetchSayisalLotoQuery(page);
  if(isFething || data === undefined) {
    return (
      <Box style={{ width: '100%', height: '100vh' }}>
        <CircularProgress className='spinnerAdminSayisalLoto' />
      </Box>
    )
  }

  console.log(data);

  return (
    <div>AdminSayisa lLoto</div>
  )
}

export default AdminSayisalLoto