import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useFetchSayisalLotoQuery } from '../store/apis/sayisalLotoApi';
import '../styles/sayisalLoto.css';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import { Typography, CircularProgress} from '@mui/material';
import SayisalLotoGetRandom from './SayisalLotoGetRandom';
import SayisalLotoLastItem from './SayisalLotoLastItem';
import SayisalLotoItem from './SayisalLotoItem'; 
import { useAxiosForSayisalLotoPagination } from './axiosComponents/axiosForSayisalLotoPagination';


function SayisalLoto() {
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (event, page) => {
    setSelectedPage(page);
  };

  
  const page = {
    pageSize:10,
    pageNumber:selectedPage
  }

  const totalPage = useAxiosForSayisalLotoPagination(page);


  console.log(totalPage);

  const {data, isError, isFetching} = useFetchSayisalLotoQuery(page);
        if(isFetching || data  === undefined){
            return (
              <Box  style={{ width: '100%', height: '100vh' }} >
                <CircularProgress className='spinnerSayisalLoto' />
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
    <Box >
            <Grid className='containerSayisalLoto' container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography className='headlinesSayisalLoto' variant='h4'>Kazandıracak Numaralar</Typography>
                    <Item><SayisalLotoGetRandom /></Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className='headlinesSayisalLoto' variant='h4'>Son Çekiliş</Typography>
                    <Item className='lastItemSayisalLoto'><SayisalLotoLastItem/></Item>
                </Grid>
                <Grid item xs={12} md={12} >
                    <Typography className='headlinesSayisalLoto' variant='h5'>Tüm Çekilişler</Typography>
                    <Pagination className='paginateSayisalLoto' count={totalPage} color="primary" page={selectedPage}  onChange={handlePageChange}/>
                    <Item className='itemsSayisalLoto'  >
                        {
                            data.map((sayisalLoto) => {
                                return <SayisalLotoItem key={sayisalLoto.id} sayisalLoto = {sayisalLoto} />
                            })
                        }
                    </Item>
                </Grid>
            </Grid>
        </Box>
  )
}

export default SayisalLoto