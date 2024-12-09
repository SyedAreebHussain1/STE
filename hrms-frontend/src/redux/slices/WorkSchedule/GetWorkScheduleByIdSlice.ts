import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetWorkScheduleById {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: GetWorkScheduleById = {
  data: null,
  loading: false,
  error: null,
};

const GetWorkScheduleByIdSlice = createSlice({
  name: "GetWorkScheduleByIdSlice",
  initialState,
  reducers: {
    GetWorkScheduleById(state) {
      state.loading = true;
    },
    GetWorkScheduleByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    GetWorkScheduleByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    GetWorkScheduleByIdClear(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  GetWorkScheduleById,
  GetWorkScheduleByIdSuccess,
  GetWorkScheduleByIdFailure,
  GetWorkScheduleByIdClear,
} = GetWorkScheduleByIdSlice.actions;

export default GetWorkScheduleByIdSlice.reducer;
