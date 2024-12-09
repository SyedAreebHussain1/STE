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

const supportTicketsSlice = createSlice({
  name: "supportTicketsSlice",
  initialState,
  reducers: {
    getSupportTickets(state) {
      state.loading = true;
    },
    getSupportTicketsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    getSupportTicketsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  getSupportTickets,
  getSupportTicketsSuccess,
  getSupportTicketsFailure,
} = supportTicketsSlice.actions;

export default supportTicketsSlice.reducer;
