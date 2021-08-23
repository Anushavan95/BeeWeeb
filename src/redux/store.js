import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashbordSlice";

export default configureStore({
  reducer: {
    dashboard: dashboardSlice,
  },
});
