import { configureStore } from '@reduxjs/toolkit';

// Reducers
import loginReducer from './slices/loginSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
  },
});
