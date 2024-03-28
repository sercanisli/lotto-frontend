import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const winningNumbersApi = createApi({
    reducerPath:'winningNumber',
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
            fetchWinningNumbers:builder.query({
                providesTags:['WinningNumbers'],
                query : (id) => {
                    return {
                        url : `/api/winningnumbers/GetOneWinningNumbersAsync/${id}`,
                        method : 'GET'
                    };
                },
            }),
        }
    }
})