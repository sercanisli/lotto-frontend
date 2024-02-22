import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SuperLotoGetRandom from './SuperLotoGetRandom';
import SuperLotoItem from './SuperLotoItem';
import { useFetchSuperLotoQuery } from '../store/apis/superLotoApi';
import '../styles/superLoto.css';
import Pagination, { paginationClasses } from '@mui/material/Pagination';
import axios from 'axios';
import SuperLotoLastItem from './SuperLotoLastItem';
import { Typography, CircularProgress} from '@mui/material';

function SuperLoto() {

    const [totalPage, setTotalPage] = useState(null);
    const [selectedPage, setSelectedPage] = useState(1);
    const [lastOne, setLastOne] = useState(null);

    const handlePageChange = (event, page) => {
        setSelectedPage(page);
    };

    useEffect(() => {
        axios.get(`https://localhost:7135/api/superloto?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`, {
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
      
        const {data, isError, isFetching} = useFetchSuperLotoQuery(page);
        if(isFetching){
            return (
              <CircularProgress className='spinnerSuperLoto' />
            )
        }
    

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
        <Box>
            <Grid className='containerSuperLoto' container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography className='headlinesSuperLoto' variant='h4'>Kazandıracak Numaralar</Typography>
                    <Item><SuperLotoGetRandom /></Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className='headlinesSuperLoto' variant='h4'>Son Çekiliş</Typography>
                    <Item className='lastItemSuperLoto'><SuperLotoLastItem lastSuperLoto={lastOne}/></Item>
                </Grid>
                <Grid item xs={12} md={12} >
                    <Typography className='headlinesSuperLoto' variant='h5'>Tüm Çekilişler</Typography>
                    <Pagination className='paginateSuperLoto' count={totalPage} color="primary" page={selectedPage}  onChange={handlePageChange}/>
                    <Item className='itemsSuperLoto'  >
                        {
                            data.map((superLoto) => {
                                return <SuperLotoItem key={superLoto.id} superLoto = {superLoto} />
                            })
                        }
                    </Item>
                </Grid>
            </Grid>
        </Box>
  )
}

export default SuperLoto