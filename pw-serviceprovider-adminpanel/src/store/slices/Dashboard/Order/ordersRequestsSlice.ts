import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrdersRequestsType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: OrdersRequestsType = {
  data: null,
  loading: false,
  error: null,
};

const ordersRequestsSlice = createSlice({
  name: "ordersRequestsSlice",
  initialState,
  reducers: {
    ordersRequests(state) {
      state.loading = true;
    },
    ordersRequestsSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    ordersRequestsFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { ordersRequests, ordersRequestsSuccess, ordersRequestsFailure } =
  ordersRequestsSlice.actions;

export default ordersRequestsSlice.reducer;
