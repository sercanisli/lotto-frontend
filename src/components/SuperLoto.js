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

function SuperLoto() {

    const [totalPage, setTotalPage] = useState(null);
    const [selectedPage, setSelectedPage] = useState(1);

    const handlePageChange = (event, page) => {
        setSelectedPage(page);
    };


    useEffect(() => {
        axios.get('https://localhost:7135/api/superloto?pageSize=10&pageNumber=1', {
            headers: {
                'Accept':'application/json'
            }
        })
          .then(response => {
            const xPaginationHeader = response.headers['X-Pagination'];
            const xPaginationData = JSON.parse(xPaginationHeader);
            const totalPage = xPaginationData.TotalPage;
            setTotalPage(totalPage);
            console.log(totalPage);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);


    const page = {
        pageSize:7,
        pageNumber:selectedPage
      }
      
        const {data, isError, isFetching} = useFetchSuperLotoQuery(page);
        if (isFetching ) {
            return <div>Loading...</div>;
        }
    

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  return (
        <Box >
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Item><SuperLotoGetRandom/></Item>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Item>
                        {
                            data.map((superLoto) => {
                                return <SuperLotoItem key={superLoto.id} superLoto = {superLoto} />
                            })
                        }
                    </Item>
                    <Pagination count={totalPage} color="primary" page={selectedPage}  onChange={handlePageChange}/>
                </Grid>
            </Grid>
        </Box>
  )
}

export default SuperLoto