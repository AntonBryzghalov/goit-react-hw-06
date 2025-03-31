import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeNameFilter: (state, action) => {
      state.name = action.payload;
      return state;
    },
  },
});

export const { changeNameFilter } = slice.actions;

export default slice.reducer;
