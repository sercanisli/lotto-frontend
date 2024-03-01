import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
    name : 'authentication',
    initialState : {user : null, token : null},
    reducers: {
        setCredentials: (state, action) => {
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state, action) => {
            state.user = null
            state.token = null
        }
    },
})

export const {setCredentials, logOut} = authenticationSlice.actions;

export default authenticationSlice.reducer;

export const selectCurrentUser = (state) => state.authentication.user
export const selectCurrentToken = (state) => state.authentication.token
