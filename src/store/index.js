import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { superLotoApi } from './apis/superLotoApi';
import { sayisalLotoApi } from './apis/sayisalLotoApi';
import { onNumaraApi } from "./apis/onNumaraApi";
import { sansTopuApi } from './apis/sansTopuApi';
import { winningNumbersApi} from './apis/winningNumbersApi';
import { authenticationApi } from "./apis/authenticationApi";
import { aboutUsApi } from './apis/aboutUsApi';
import authReducer from '../features/authentication/authenticationSlice'
 
export const store = configureStore({
    reducer: {
        [superLotoApi.reducerPath]: superLotoApi.reducer,
        [sayisalLotoApi.reducerPath]: sayisalLotoApi.reducer,
        [onNumaraApi.reducerPath]: onNumaraApi.reducer,
        [sansTopuApi.reducerPath]: sansTopuApi.reducer,
        [winningNumbersApi.reducerPath]: winningNumbersApi.reducer,
        [aboutUsApi.reducerPath]: aboutUsApi.reducer,
        auth: authReducer
    },
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(superLotoApi.middleware)
            .concat(sayisalLotoApi.middleware)
            .concat(onNumaraApi.middleware)
            .concat(sansTopuApi.middleware)
            .concat(winningNumbersApi.middleware)
            .concat(aboutUsApi.middleware)
            .concat(authenticationApi.middleware),
    devTools:true
})

setupListeners(store.dispatch);

export { useFetchSuperLotoQuery, useAddSuperLotoMutation, useRemoveSuperLotoMutation, useGetRandomNumbersForSuperLotoQuery, useGetSuperLotoLastItemQuery } from './apis/superLotoApi';
export { useFetchSayisalLotoQuery, useFetchOneSayisalLotoQuery, useGetRandomNumbersForSayisalLotoQuery, useGetSayisalLotoLastItemQuery, useCreateSayisalLotoMutation } from './apis/sayisalLotoApi';
export { useFetchOnNumaraQuery, useGetRandomNumbersForOnNumaraQuery, useGetOnNumaraLastItemQuery } from './apis/onNumaraApi';
export { useFetchSansTopuQuery, useGetRandomNumbersForSansTopuQuery, useGetSansTopuLastItemQuery } from './apis/sansTopuApi';
export { useFetchWinningNumbersQuery } from './apis/winningNumbersApi';
export { useFetchAboutUsQuery } from './apis/aboutUsApi';