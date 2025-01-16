import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allShowsArray: [],
};

const allShowsSlice = createSlice({
  name: "allShows",
  initialState: initialState,
  reducers: {
    addShows: (state, action) => {
      state.allShowsArray.push(...action.payload);
    },
  },
});

export const { addShows } = allShowsSlice.actions;
export default allShowsSlice.reducer;
