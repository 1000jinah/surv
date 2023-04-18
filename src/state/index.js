import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  //   userId: "",
  //   text: "signin",
  //   message: true,
};

export const globalSlice = createSlice({
  name: " global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    // setShowText: (state) => {
    //   state.text = state.text === "signin" ? "login" : "signin";
    // },
    // setMessage: (state) => {
    //   state.message = state.message === false ? true : false;
    // },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
