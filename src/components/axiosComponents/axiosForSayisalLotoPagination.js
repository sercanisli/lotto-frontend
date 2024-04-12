import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function useAxiosForSayisalLotoPagination(page) {
    const [totalPage, setTotalPage] = useState(null);

    useEffect(() => {
        axios.get(`https://localhost:7135/api/sayisalloto/GetAllNumbersArrayForSayisalLotoAsync/?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            const xPaginationHeader = response.headers['x-pagination'];
            const xPaginationData = JSON.parse(xPaginationHeader);
            const totalPage = xPaginationData.TotalPage;
            setTotalPage(totalPage);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, [page]); 

    return totalPage;
}
