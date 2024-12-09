import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetEbooksSType {
    data: any;
    loading: boolean;
    error: string | null;
}

const initialState: GetEbooksSType = {
    data: null,
    loading: false,
    error: null,
};

const getEbooksSlice = createSlice({
    name: "getMarketingSlice",
    initialState,
    reducers: {
        getEbooks(state) {
            state.loading = true;
        },
        getEbooksSuccess(state, action: PayloadAction<any>) {
            state.data = action.payload;
            state.loading = false;
        },
        getEbooksFailure(state, action: PayloadAction<any>) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
        clearGetEbooks(state, action: PayloadAction<any>) {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
        },
    },
});

export const {
    getEbooks,
    getEbooksSuccess,
    getEbooksFailure,
    clearGetEbooks
} = getEbooksSlice.actions;

export default getEbooksSlice.reducer;
