import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditFeature {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: EditFeature = {
  data: null,
  loading: false,
  error: null,
};

const EditFeatureSlice = createSlice({
  name: "EditFeature",
  initialState,
  reducers: {
    EditFeature(state) {
      state.loading = true;
    },
    EditFeatureSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    EditFeatureFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { EditFeature, EditFeatureSuccess, EditFeatureFailure } =
  EditFeatureSlice.actions;

export default EditFeatureSlice.reducer;
