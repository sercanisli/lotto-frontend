import React from 'react';
import { useFetchSuperLotoQuery } from '../store/apis/superLotoApi';

function SuperLotoList() {
  const {data, isError, isFetching} = useFetchSuperLotoQuery();
    console.log(data)
  return (
    <div>SuperLotoList</div>
  )
}

export default SuperLotoList