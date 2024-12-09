import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface addAttachmentToProjectTaskType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: addAttachmentToProjectTaskType = {
  data: null,
  loading: false,
  error: null,
};

const addAttachmentToProjectTaskSlice = createSlice({
  name: "addAttachmentToProjectTaskSlice",
  initialState,
  reducers: {
    addAttachmentToProjectTask(state) {
      state.loading = true;
    },
    addAttachmentToProjectTaskSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addAttachmentToProjectTaskFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  addAttachmentToProjectTask,
  addAttachmentToProjectTaskSuccess,
  addAttachmentToProjectTaskFailure,
} = addAttachmentToProjectTaskSlice.actions;

export default addAttachmentToProjectTaskSlice.reducer;
