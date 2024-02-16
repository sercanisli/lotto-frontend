import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { superLotoApi } from './apis/superLotoApi';
import { authenticationApi } from "./apis/authenticationApi";

export const store = configureStore({
    reducer: {
        [superLotoApi.reducerPath]: superLotoApi.reducer,
        [authenticationApi.reducerPath] : authenticationApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(superLotoApi.middleware)
            .concat(authenticationApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchSuperLotoQuery, useAddSuperLotoMutation, useRemoveSuperLotoMutation, useGetRandomNumbersQuery } from './apis/superLotoApi';
export { useFetchAuthenticationQuery} from './apis/authenticationApi';