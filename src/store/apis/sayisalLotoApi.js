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
                        url :`/api/sayisalloto/GetAllNumbersArrayForSayisalLotoAsync/?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`,
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
            }),
            createSayisalLoto: builder.mutation({
                invalidatesTags: (result, error, sayisalLoto) => {
                    return [{type:'SayisalLoto', id: sayisalLoto.id}];
                },
                query: (sayisalLoto) => ({
                    url: '/api/sayisalloto', 
                    method: 'POST', 
                    body: {
                        numbers:sayisalLoto.numbers,
                        date: sayisalLoto.date
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }),
            }),
        };
    },
});

export const { useFetchSayisalLotoQuery, useGetRandomNumbersForSayisalLotoQuery, useGetSayisalLotoLastItemQuery, useCreateSayisalLotoMutation } = sayisalLotoApi;
export { sayisalLotoApi };