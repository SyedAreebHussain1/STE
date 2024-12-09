import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface decodeUrlApiType {
  data: any;
  loading: boolean;
  error: string | null;
  affilateId: number | null; 
}

const initialState: decodeUrlApiType = {
  data: null,
  loading: false,
  error: null,
  affilateId: null, 
};

const decodeUrlApiSlice = createSlice({
  name: "decodeUrlApiSlice",
  initialState,
  reducers: {
    postdecodeUrlApiSlice(state) {
      state.loading = true;
    },
    postdecodeUrlApiSliceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload; 
      state.loading = false;
      state.error = null; 
    },
    postdecodeUrlApiSliceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    setAffilateId(state, action: PayloadAction<number>) {
      state.affilateId = action.payload; 
    }
  },
});

export const { postdecodeUrlApiSlice, postdecodeUrlApiSliceFailure, postdecodeUrlApiSliceSuccess, setAffilateId } =
  decodeUrlApiSlice.actions;

export default decodeUrlApiSlice.reducer;
