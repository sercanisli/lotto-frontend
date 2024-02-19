import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { superLotoApi } from './apis/superLotoApi';
import { authenticationApi } from "./apis/authenticationApi";
import { sayisalLotoApi } from './apis/sayisalLotoApi';

export const store = configureStore({
    reducer: {
        [authenticationApi.reducerPath] : authenticationApi.reducer,
        [superLotoApi.reducerPath]: superLotoApi.reducer,
        [sayisalLotoApi.reducerPath]: sayisalLotoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(authenticationApi.middleware)
            .concat(superLotoApi.middleware)
            .concat(sayisalLotoApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchAuthenticationQuery} from './apis/authenticationApi';
export { useFetchSuperLotoQuery, useAddSuperLotoMutation, useRemoveSuperLotoMutation, useGetRandomNumbersForSuperLotoQuery } from './apis/superLotoApi';
export { useFetchSayisalLotoQuery, useGetRandomNumbersForSayisalLotoQuery } from './apis/sayisalLotoApi';