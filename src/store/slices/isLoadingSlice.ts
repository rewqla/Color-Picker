import { createSlice } from "@reduxjs/toolkit";

interface isLoadingState {
  isLoading: boolean;
}

const initialState: isLoadingState = {
  isLoading: false,
};

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
  },
});

export const { setLoading } = isLoadingSlice.actions;
