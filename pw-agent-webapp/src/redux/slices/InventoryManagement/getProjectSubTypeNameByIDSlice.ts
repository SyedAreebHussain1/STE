import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProjectSubTypeNameByID {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProjectSubTypeNameByID = {
  data: null,
  loading: false,
  error: null,
};

const getProjectSubTypeNameByIDSlice = createSlice({
  name: "getProjectSubTypeNameByID",
  initialState,
  reducers: {
    getProjectSubTypeNameByID(state) {
      state.loading = true;
    },
    getProjectSubTypeNameByIDSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProjectSubTypeNameByIDFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getProjectSubTypeNameByID,
  getProjectSubTypeNameByIDSuccess,
  getProjectSubTypeNameByIDFailure,
} = getProjectSubTypeNameByIDSlice.actions;

export default getProjectSubTypeNameByIDSlice.reducer;
