import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const superLotoApi = createApi({
    reducerPath:'superLoto',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://localhost:7135',
        prepareHeaders: (headers, { getState }) => {
            headers['Content-Type'] = 'application/json';
            return headers;
        },
        fetchFn: (...args) => {
            return fetch(...args);
        },
    }),
    endpoints(builder) {
        return {
            fetchSuperLoto:builder.query({
                providesTags:['SuperLoto'],
                query: (page) => {
                    return {
                        url :`/api/superloto/GetAllNumbersArrayForSuperLotoAsync/?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`,
                        method:'GET',
                    };
                },
            }),
            getRandomNumbersForSuperLoto:builder.query({
                providesTags:['SuperLoto'],
                query: () => {
                    return {
                        url: '/api/superloto/GetRandomNumbersForSuperLotoAsync',
                        method:'GET'
                    };
                    
                },
            }),
            getSuperLotoLastItem:builder.query({
                providesTags:['SuperLoto'],
                query: () => {
                    return {
                        url: '/api/superloto/GetSuperLotoLastItemAsync',
                        method: 'GET'
                    };
                },
            }),
            addSuperLoto:builder.mutation({
                invalidatesTags: () => {
                    return [{type: 'SuperLoto'}];
                },
                query : () => {
                    return {
                        url:'/api/superloto',
                        method:'POST',
                        body: {
                            numbers:[
                                5,
                                10,
                                15,
                                20,
                                25,
                                30
                            ],
                            Date: "30.12.2023 00:00:00"
                        },
                    };
                },
            }),
            removeSuperLoto: builder.mutation({
                invalidatesTags:() => {
                    return[{type:'SuperLoto'}]
                },
                query:(superloto) => {
                    return {
                        url:`/api/sayisalloto/${superloto.id}`,
                        method:'DELETE'
                    };
                },
            }),
        };
    },
});

export const { useFetchSuperLotoQuery, useAddSuperLotoMutation, useRemoveSuperLotoMutation, useGetRandomNumbersForSuperLotoQuery, useGetSuperLotoLastItemQuery } = superLotoApi;
export { superLotoApi };
