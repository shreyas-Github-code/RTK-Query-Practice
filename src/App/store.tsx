import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "../services/api";

// Adding the api middleware enables caching, invalidation, polling,
// and other useful features of `rtk-query`

export const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware),
});