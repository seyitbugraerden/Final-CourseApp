import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../components/Slice/dataSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
