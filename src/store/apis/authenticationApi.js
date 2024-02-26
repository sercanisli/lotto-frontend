import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/authentication/authenticationSlice'; 

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
            loginUser:builder.mutation({
                providesTags:['Authenctication'],
                query : (user) => {
                    return {
                        url:'api/authentication/login',
                        method : 'POST',
                        body: JSON.stringify(user)
                    };
                },
            }),
        }
    }
});

export const { useLoginUserMutation } = authenticationApi;
export { authenticationApi };
