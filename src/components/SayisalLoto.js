import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useFetchSayisalLotoQuery } from '../store/apis/sayisalLotoApi';
import '../styles/sayisalLoto.css';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import axios from 'axios';
import { Typography, CircularProgress} from '@mui/material';
import SayisalLotoGetRandom from './SayisalLotoGetRandom';
import SayisalLotoLastItem from './SayisalLotoLastItem';
import SayisalLotoItem from './SayisalLotoItem';


function SayisalLoto() {

  const [lastOne, setLastOne] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageChange = (event, page) => {
    setSelectedPage(page);
  };

  useEffect(() => {
    axios.get(`https://localhost:7135/api/sayisalloto?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`, {
        headers: {
            'Accept':'application/json'
        }
    })
      .then(response => {
        const lastOneData = response.data[0];
        setLastOne(lastOneData);
        const xPaginationHeader = response.headers['x-pagination'];
        const xPaginationData = JSON.parse(xPaginationHeader);
        const totalPage = xPaginationData.TotalPage;
        setTotalPage(totalPage);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const page = {
    pageSize:10,
    pageNumber:selectedPage
  }

  console.log(totalPage);

  const {data, isError, isFetching} = useFetchSayisalLotoQuery(page);
        if(isFetching){
            return (
              <CircularProgress className='spinner' />
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
            <Grid className='container' container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography className='headlines' variant='h4'>Kazandıracak Numaralar</Typography>
                    <Item><SayisalLotoGetRandom /></Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className='headlines' variant='h4'>Son Çekiliş</Typography>
                    <Item className='lastItem'><SayisalLotoLastItem lastOne = {lastOne}/></Item>
                </Grid>
                <Grid item xs={12} md={12} >
                    <Typography className='headlines' variant='h5'>Tüm Çekilişler</Typography>
                    <Pagination className='paginate' count={totalPage} color="primary" page={selectedPage}  onChange={handlePageChange}/>
                    <Item className='items'  >
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