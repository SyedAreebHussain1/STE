import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface getProjectSubTypeByProjectTypeID {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: getProjectSubTypeByProjectTypeID = {
  data: null,
  loading: false,
  error: null,
};

const getProjectSubTypeByProjectTypeIDSlice = createSlice({
  name: "getProjectSubTypeByProjectTypeID",
  initialState,
  reducers: {
    getProjectSubTypeByProjectTypeID(state) {
      state.loading = true;
    },
    getProjectSubTypeByProjectTypeIDSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getProjectSubTypeByProjectTypeIDFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    removeGetProjectSubTypeByProjectTypeID(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  getProjectSubTypeByProjectTypeID,
  getProjectSubTypeByProjectTypeIDSuccess,
  getProjectSubTypeByProjectTypeIDFailure,
  removeGetProjectSubTypeByProjectTypeID,
} = getProjectSubTypeByProjectTypeIDSlice.actions;

export default getProjectSubTypeByProjectTypeIDSlice.reducer;
