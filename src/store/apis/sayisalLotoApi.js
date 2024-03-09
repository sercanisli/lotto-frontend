import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const sayisalLotoApi = createApi ({
    reducerPath:'sayisalLoto',
    baseQuery: fetchBaseQuery({
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
            fetchSayisalLoto:builder.query({
                providesTags:['SayisalLoto'],
                query : (page) => {
                    return {
                        url :`/api/sayisalloto?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`,
                        method:'GET',
                    }; 
                },
            }),
            getRandomNumbersForSayisalLoto:builder.query({
                providesTags:['SayisalLoto'],
                query: () => {
                    return {
                        url: '/api/sayisalloto/GetRandomNumbersForSayisalLotoAsync',
                        method: 'GET'
                    };
                },
            }),
            getSayisalLotoLastItem:builder.query({
                providesTags:['SayisalLoto'],
                query: () => {
                    return {
                        url:'/api/sayisalloto/GetSayisalLotoLastItemAsync',
                        method : 'GET'
                    }
                }
            })
        };
    },
});

export const { useFetchSayisalLotoQuery, useGetRandomNumbersForSayisalLotoQuery } = sayisalLotoApi;
export { sayisalLotoApi };