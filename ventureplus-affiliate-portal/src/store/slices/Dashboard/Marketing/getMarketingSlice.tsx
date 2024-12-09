import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetMarketingType {
    data: any;
    loading: boolean;
    error: string | null;
}

const initialState: GetMarketingType = {
    data: null,
    loading: false,
    error: null,
};

const getMarketingSlice = createSlice({
    name: "getMarketingSlice",
    initialState,
    reducers: {
        getMarketing(state) {
            state.loading = true;
        },
        getMarketingSuccess(state, action: PayloadAction<any>) {
            state.data = action.payload;
            state.loading = false;
        },
        getMarketingFailure(state, action: PayloadAction<any>) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearGetMarketing(state, action: PayloadAction<any>) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
    },
});

export const {
    getMarketing,
    getMarketingSuccess,
    getMarketingFailure,
    clearGetMarketing
} = getMarketingSlice.actions;

export default getMarketingSlice.reducer;
