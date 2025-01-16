import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  device: "",
};

const deviceTypeSlice = createSlice({
  name: "deviceType",
  initialState: initialState,
  reducers: {
    setDeviceType: (state, action) => {
      state.device = action.payload;
    },
  },
});

export const { setDeviceType } = deviceTypeSlice.actions;
export default deviceTypeSlice.reducer;
