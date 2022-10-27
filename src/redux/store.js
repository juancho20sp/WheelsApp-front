import { configureStore } from '@reduxjs/toolkit';

// Reducers
import loginReducer from './slices/loginSlice';
import commonReducer from './slices/commonSlice';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    common: commonReducer,
    user: userReducer,
  },
});
