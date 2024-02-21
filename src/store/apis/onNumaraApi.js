import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const onNumaraApi = createApi ({
    reducerPath:'onNumara',
    baseQuery:fetchBaseQuery({
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
            fetchOnNumara:builder.query({
                providesTags:['OnNumara'],
                query : (page) => {
                    return {
                        url:`/api/onnumara?pageSize=${page.pageSize}&pageNumber=${page.pageNumber}`,
                        method : 'GET',
                    };
                },
            }),
            getRandomNumbersForOnNumara:builder.query({
                providesTags:['OnNumara'],
                query: () => {
                    return {
                        url: '/api/onnumara/GetRandomNumbersForOnNumaraAsync',
                        method: 'GET'
                    };
                },
            })
        };
    },
});

export const { useFetchOnNumaraQuery, useGetRandomNumbersForOnNumaraQuery } = onNumaraApi;
export {onNumaraApi};