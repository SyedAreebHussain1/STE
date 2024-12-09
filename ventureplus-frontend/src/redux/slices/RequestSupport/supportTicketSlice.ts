import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SupportTicketType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: SupportTicketType = {
  data: null,
  loading: false,
  error: null,
};

const supportTicketSlice = createSlice({
  name: "supportTicketSlice",
  initialState,
  reducers: {
    getSupportTicketById(state) {
      state.loading = true;
    },
    getSupportTicketByIdSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getSupportTicketByIdFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    postSupportTicket(state) {
      state.loading = true;
    },
    postSupportTicketSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    postSupportTicketFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getSupportTicketById,
  getSupportTicketByIdSuccess,
  getSupportTicketByIdFailure,
  postSupportTicket,
  postSupportTicketSuccess,
  postSupportTicketFailure,
} = supportTicketSlice.actions;

export default supportTicketSlice.reducer;
