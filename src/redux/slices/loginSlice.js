import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    token: ''
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;

      if (action.payload) {
        state.token = action.payload;
      }
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.token = '';
    }
  },
});

export const { 
  login,
  logout
} = loginSlice.actions;

export default loginSlice.reducer;
