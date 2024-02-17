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
                    debugger;
                    return {
                        url : '/api/authentication/login' ,
                        method : 'POST',
                        body: {
                            userName : user.username,
                            password : user.password
                        },
                    };
                },
            }),
        };
    },
});

export const { useFetchAuthenticationQuery } = authenticationApi;
export { authenticationApi };
