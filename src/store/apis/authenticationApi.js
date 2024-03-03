import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/authentication/authenticationSlice'; 

const baseQuery = fetchBaseQuery ({
    baseUrl: 'https://localhost:7135',
    credentials: 'include',
    prepareHeaders : (headers, {getState}) => {
        headers.set("Content-Type", `application/json`)
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if(result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        const refreshResult = await baseQuery('/api/authentication/refresh', api, extraOptions)
        console.log(refreshResult)
        if(refreshResult?.data) {
            const user = api.getState().auth.user
            api.dispatch(setCredentials({...refreshResult.data, user}))
            result = await baseQuery (args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const authenticationApi = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})