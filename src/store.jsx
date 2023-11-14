import { configureStore } from "@reduxjs/toolkit";
import userslice from "./slices/userslice";
// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    userLoginInfo: userslice,
  },
});
