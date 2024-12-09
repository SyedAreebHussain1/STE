import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AddNewLead {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: AddNewLead = {
  data: null,
  loading: false,
  error: null,
};

const addNewLeadSlice = createSlice({
  name: "addNewLeadSlice",
  initialState,
  reducers: {
    addNewLead(state) {
      state.loading = true;
    },
    addNewLeadSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    addNewLeadFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { addNewLead, addNewLeadSuccess, addNewLeadFailure } =
  addNewLeadSlice.actions;

export default addNewLeadSlice.reducer;
