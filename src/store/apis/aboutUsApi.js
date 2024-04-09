import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const aboutUsApi = createApi({
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
            fetchAboutUs:builder.query({
                providesTags:['AboutUs'],
                query : (id) => {
                    return {
                        url : `/api/aboutus/${id}`,
                        method : 'GET'
                    };
                },
            }),
        };
    },
});

export const {useFetchAboutUsQuery} = aboutUsApi;
export {aboutUsApi};