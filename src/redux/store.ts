import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./boardSilce";

export default configureStore({
  reducer: {
    board: boardReducer,
  },
});
