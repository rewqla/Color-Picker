import { createSlice } from "@reduxjs/toolkit";
import Color from "../../interfaces/Color";

interface LocalStorageState {
  savedColors: Color[];
}

const initialState: LocalStorageState = {
  savedColors: [],
};

export const localStorageSlice = createSlice({
  name: "localStorage",
  initialState,
  reducers: {
    retrieveSavedColors: (state) => {
      try {
        const items = localStorage.getItem("SavedColors");

        state.savedColors = items ? JSON.parse(items) : [];
      } catch (error) {
        console.error("Error getting item from local storage:", error);
      }
    },
    setSavedColors: (state, action) => {
      try {
        state.savedColors = [...state.savedColors, action.payload];

        localStorage.setItem("SavedColors", JSON.stringify(state.savedColors));
      } catch (error) {
        console.error("Error setting item in local storage:", error);
      }
    },
    deleteSavedColors: (state, action) => {
      try {
        state.savedColors.splice(action.payload, 1);

        localStorage.setItem("SavedColors", JSON.stringify(state.savedColors));
      } catch (error) {
        console.error("Error deleting item from local storage:", error);
      }
    },
  },
});

export const { retrieveSavedColors, setSavedColors, deleteSavedColors } =
  localStorageSlice.actions;
