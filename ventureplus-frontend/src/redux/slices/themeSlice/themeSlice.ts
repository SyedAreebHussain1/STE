import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage } from "../../../utils/storage";

interface ThemeState {
  darkMode: any;
}

const initialState: ThemeState = {
  darkMode: "",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = getFromStorage("theme");
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
