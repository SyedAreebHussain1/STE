import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    language: userReducer, //this (user) will help to manipulate the state of redux
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});
