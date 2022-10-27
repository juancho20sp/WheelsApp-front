import { createSlice } from '@reduxjs/toolkit';

const parseJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(window.atob(base64).split('').map((c) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  console.log(JSON.parse(jsonPayload));

  return JSON.parse(jsonPayload);
};

const saveToLocalStorage = (state) => {
  localStorage.setItem('loginSlice', JSON.stringify(state));
};

const getFromLocalStorage = (keyName) => {
  const item = localStorage.getItem(keyName);

  if (item) {
    return JSON.parse(item);
  }

  return false;
};

export const loginSlice = createSlice({
  name: 'login',
  initialState: getFromLocalStorage('loginSlice') ? getFromLocalStorage('loginSlice') : {
    isLoggedIn: false,
    token: '',
    userId: '',
    userRoles: '',
    currentRole: '',
    isDriver: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;

      if (action.payload) {
        state.token = action.payload;

        const decodedJwt = parseJwt(action.payload);
        state.userId = decodedJwt.sub;
        state.userRoles = decodedJwt.claims;
        state.currentRole = decodedJwt.claims.includes('DRIVER') ? 'DRIVER' : 'PASSENGER';
        state.isDriver = decodedJwt.claims.includes('DRIVER') ? true: false;

        saveToLocalStorage(state);
      }
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.token = '';

      localStorage.clear();
    },

    setCurrentRole: (state, action) => {
      if (action.payload) {
        state.currentRole = action.payload;
        saveToLocalStorage(state);
      }
    }
  },
});

export const {
  login,
  logout,
  setCurrentRole
} = loginSlice.actions;

export default loginSlice.reducer;
