import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authenticationApi = createApi ({
    reducerPath:'authenctication',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://localhost:7135',
        prepareHeaders:(headers, {getState}) => {
            headers['Content-Type'] = 'application/json';
            return headers;
        },
        fetchFn: (...args) => {
            return fetch(...args);
        },
    }),
    endpoints(builder) {
        return {
            fetchAuthentication:builder.query({
                providesTags:['Authentication'],
                query:(user) => {
                    const { userName, password } = user;
                    return {
                        url : '/api/authentication/login' ,
                        method : 'POST',
                        body: JSON.stringify({ userName, password })
                    };
                },
            }),
        };
    },
});

export const { useFetchAuthenticationQuery } = authenticationApi;
export { authenticationApi };
