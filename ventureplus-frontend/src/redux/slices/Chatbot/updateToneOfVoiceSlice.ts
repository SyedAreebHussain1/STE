import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface updateToneOfVoiceType {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: updateToneOfVoiceType = {
  data: null,
  loading: false,
  error: null,
};

const updateToneOfVoiceSlice = createSlice({
  name: "updateToneOfVoiceSlice",
  initialState,
  reducers: {
    updateToneOfVoice(state) {
      state.loading = true;
    },
    updateToneOfVoiceSuccess(state, action: PayloadAction<any>) {
      state.data = action.payload;
      state.loading = false;
    },
    updateToneOfVoiceFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
    },
    clearupdateToneOfVoice(state) {
      state.loading = false;
      state.data = null;
    },
  },
});

export const {
  updateToneOfVoice,
  updateToneOfVoiceSuccess,
  updateToneOfVoiceFailure,
  clearupdateToneOfVoice,
} = updateToneOfVoiceSlice.actions;

export default updateToneOfVoiceSlice.reducer;
