import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "language", //it doen't matter which name you are defining here
  initialState: {
    
    lang: "en",
  },
  reducers: {
    
    languageSuccess: (state, action) => {
      state.lang=action.payload.lang;     
    },
    
  },
});

export const { languageSuccess } = userSlice.actions;

export default userSlice.reducer;
