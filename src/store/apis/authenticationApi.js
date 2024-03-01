import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/authentication/authenticationSlice'; 

const baseQuery = fetchBaseQuery ({
    baseUrl: 'https://localhost:7135',
    credentials: 'include',
    prepareHeaders : (headers, {getState}) => {
        const token = getState().authentication.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauthentication = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if(result?.error?.originalStatus === 403) {
        console.log('sending refresh token')
        const refreshResult = await baseQuery('api/authentication/refresh', api, extraOptions)
        console.log(refreshResult)
        if(refreshResult?.data) {
            const user = api.getState().authentication.user
            api.dispatch(setCredentials({...refreshResult.data, user}))
            result = await baseQuery (args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const authenticationApi = createApi({
    baseQuery: baseQueryWithReauthentication,
    endpoints: builder => ({})
})