import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    chcheResults: (state, action) => {
     Object.assign(state, action.payload);
    },
  },
});
export const { chcheResults } = searchSlice.actions;
export default searchSlice.reducer;
