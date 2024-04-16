import { authenticationApi } from "../../store/apis/authenticationApi";

export const authApiSlice = authenticationApi.injectEndpoints({
    endpoints: builder => ({
      login: builder.mutation({
        query: credentials => ({
          url: '/api/authentication/login',
          method: 'POST',
          body: { ...credentials }
        }),
      }),
    })
  });
export const {useLoginMutation} = authApiSlice