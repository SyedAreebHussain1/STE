import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLeadDataById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetLeadDataById = {
  data: null,
  loading: false,
  error: null,
};

const pwpGetAllProjectListSlice = createSlice({
  name: "pwpGetAllProjectListSlice",
  initialState,
  reducers: {
    pwpGetAllProjectList(state) {
      state.loading = true;
    },
    pwpGetAllProjectListSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    pwpGetAllProjectListFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  pwpGetAllProjectList,
  pwpGetAllProjectListSuccess,
  pwpGetAllProjectListFailure,
} = pwpGetAllProjectListSlice.actions;

export default pwpGetAllProjectListSlice.reducer;
