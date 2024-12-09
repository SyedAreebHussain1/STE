import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllModulesSideBarType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllModulesSideBarType = {
  data: null,
  loading: false,
  error: null,
};

const getAllModulesSideBarSlice = createSlice({
  name: "getAllModulesSideBarSlice",
  initialState,
  reducers: {
    getAllModulesSideBar(state) {
      state.loading = true;
    },
    getAllModulesSideBarSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllModulesSideBarFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllModulesSideBar,
  getAllModulesSideBarSuccess,
  getAllModulesSideBarFailure,
} = getAllModulesSideBarSlice.actions;

export default getAllModulesSideBarSlice.reducer;
