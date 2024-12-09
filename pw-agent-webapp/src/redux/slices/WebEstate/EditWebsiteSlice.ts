import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditWebsite {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: EditWebsite = {
  data: null,
  loading: false,
  error: null,
};

const EditWebsiteSlice = createSlice({
  name: "EditWebsite",
  initialState,
  reducers: {
    EditWebsite(state) {
      state.loading = true;
    },
    EditWebsiteSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    EditWebsiteFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { EditWebsite, EditWebsiteSuccess, EditWebsiteFailure } =
  EditWebsiteSlice.actions;

export default EditWebsiteSlice.reducer;
