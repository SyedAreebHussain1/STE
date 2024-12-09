import { createSlice } from "@reduxjs/toolkit";

type DndStackItemT = {
  id: number;
  dataSource: any[];
  formData: any;
  type: string;
};

interface initialStateI {
  stack: DndStackItemT[];
}

const initialState: initialStateI = {
  stack: [],
};

const dndStackSlice = createSlice({
  name: "SelectedBusiness",
  initialState,
  reducers: {
    resetStack: (state, action) => {
      state.stack = [];
    },
  },
});

export const { resetStack } = dndStackSlice.actions;

export default dndStackSlice.reducer;
