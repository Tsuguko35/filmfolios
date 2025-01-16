import { configureStore } from "@reduxjs/toolkit";
import allShowsReducer from "./slices/allShowsSlice";
import deviceTypeReducer from "./slices/deviceTypeSlice";

export const store = configureStore({
  reducer: {
    allShows: allShowsReducer,
    deviceType: deviceTypeReducer,
  },
});
