import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { superLotoApi } from './apis/superLotoApi';
import { authenticationApi } from "./apis/authenticationApi";
import { sayisalLotoApi } from './apis/sayisalLotoApi';
import { onNumaraApi } from "./apis/onNumaraApi";
import { sansTopuApi } from './apis/sansTopuApi';

export const store = configureStore({
    reducer: {
        [authenticationApi.reducerPath] : authenticationApi.reducer,
        [superLotoApi.reducerPath]: superLotoApi.reducer,
        [sayisalLotoApi.reducerPath]: sayisalLotoApi.reducer,
        [onNumaraApi.reducerPath]: onNumaraApi.reducer,
        [sansTopuApi.reducerPath]: sansTopuApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(authenticationApi.middleware)
            .concat(superLotoApi.middleware)
            .concat(sayisalLotoApi.middleware)
            .concat(onNumaraApi.middleware)
            .concat(sansTopuApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useLoginUserMutation} from './apis/authenticationApi';
export { useFetchSuperLotoQuery, useAddSuperLotoMutation, useRemoveSuperLotoMutation, useGetRandomNumbersForSuperLotoQuery } from './apis/superLotoApi';
export { useFetchSayisalLotoQuery, useGetRandomNumbersForSayisalLotoQuery } from './apis/sayisalLotoApi';
export { useFetchOnNumaraQuery, useGetRandomNumbersForOnNumaraQuery } from './apis/onNumaraApi';
export { useFetchSansTopuQuery, useGetRandomNumbersForSansTopuQuery } from './apis/sansTopuApi';