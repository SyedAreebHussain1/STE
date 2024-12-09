import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetAllServicesType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetAllServicesType = {
  data: null,
  loading: false,
  error: null,
};

const getAllServicesSlice = createSlice({
  name: "getAllServicesSlice",
  initialState,
  reducers: {
    getAllServices(state) {
      state.loading = true;
    },
    getAllServicesSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getAllServicesFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearGetAllServices(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getAllServices,
  getAllServicesSuccess,
  getAllServicesFailure,
  clearGetAllServices,
} = getAllServicesSlice.actions;

export default getAllServicesSlice.reducer;
