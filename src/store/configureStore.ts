import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { isLoadingSlice } from "./slices/isLoadingSlice";
import { localStorageSlice } from "./slices/localStorageSlice";

export const store = configureStore({
  reducer: {
    localStorage: localStorageSlice.reducer,
    isLoading: isLoadingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
