import { configureStore } from '@reduxjs/toolkit';

// Reducers
import loginReducer from './slices/loginSlice';
import commonReducer from './slices/commonSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    common: commonReducer
  },
});
