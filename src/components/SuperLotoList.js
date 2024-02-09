import React from 'react';
import { useFetchSuperLotoQuery } from '../store/apis/superLotoApi';



function SuperLotoList() {


const page = {
  pageSize:5,
  pageNumber:15,
  fields:'date, numbers'
}

  const {data, isError, isFetching} = useFetchSuperLotoQuery(page);
    console.log(data)
  return (
    <div>

    </div>
  )
}

export default SuperLotoList