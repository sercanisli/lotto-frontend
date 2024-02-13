import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { superLotoApi } from './apis/superLotoApi';

export const store = configureStore({
    reducer: {
        [superLotoApi.reducerPath]: superLotoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(superLotoApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchSuperLotoQuery, useAddSuperLotoMutation, useRemoveSuperLotoMutation, useGetRandomNumbersQuery } from './apis/superLotoApi';