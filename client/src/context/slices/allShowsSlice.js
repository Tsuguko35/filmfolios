import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allShowsArray: null,
};

const allShowsSlice = createSlice({
  name: "allShows",
  initialState: initialState,
  reducers: {
    addShows: (state, action) => {
      console.log(action.payload);

      state.allShowsArray = action.payload;
    },
  },
});

export const { addShows } = allShowsSlice.actions;
export default allShowsSlice.reducer;
