import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const sansTopuApi = createApi ({
    reducerPath:'sansTopu',
    baseQuery : fetchBaseQuery ({
        baseUrl:'https://localhost:7135',
        prepareHeaders: (headers, {getState}) => {
            headers['Content-Type'] = 'application/json';
            return headers;
         },
         fetchFn:(...args) => {
            return fetch(...args);
         },
    }),
    endpoints(builder) {
        return {
            fetchSansTopu:builder.query({
                providesTags:['SansTopu'],
                query: (page) => {
                    return {
                        url:`/api/sanstopu/GetAllNumbersArrayForOnNumaraAsync/?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`,
                        method:'GET',
                    };
                },
            }),
            getRandomNumbersForSansTopu:builder.query({
                providesTags:['SansTopu'],
                query: () => {
                    return {
                        url : '/api/sanstopu/GetRandomNumbersForSansTopuAsync',
                        method : 'GET'
                    };
                },
            }),
            getSansTopuLastItem:builder.query({
                providesTags:['SansTopu'],
                query : () => {
                    return {
                        url : '/api/sanstopu/GetSansTopuLastItemAsync',
                        method : 'GET'
                    }
                }
            })
        };
    },
});

export const { useFetchSansTopuQuery, useGetRandomNumbersForSansTopuQuery, useGetSansTopuLastItemQuery} = sansTopuApi;
export {sansTopuApi};