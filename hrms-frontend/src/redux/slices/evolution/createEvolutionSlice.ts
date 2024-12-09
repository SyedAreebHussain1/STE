import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CreateEvolution {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: CreateEvolution = {
  data: null,
  loading: false,
  error: null,
};

const createEvolutionSlice = createSlice({
  name: "createEvolutionSlice",
  initialState,
  reducers: {
    createEvolution(state) {
      state.loading = true;
    },
    createEvolutionSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    createEvolutionFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const {
  createEvolution,
  createEvolutionSuccess,
  createEvolutionFailure,
} = createEvolutionSlice.actions;

export default createEvolutionSlice.reducer;
