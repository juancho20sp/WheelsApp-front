import { createSlice } from '@reduxjs/toolkit';


const saveToLocalStorage = (state) => {
  localStorage.setItem('userSlice', JSON.stringify(state));
};

const getFromLocalStorage = (keyName) => {
  const item = localStorage.getItem(keyName);

  if (item) {
    return JSON.parse(item);
  }

  return false;
};

export const userSlice = createSlice({
  name: 'login',
  initialState: getFromLocalStorage('userSlice') ? getFromLocalStorage('userSlice') : {
    userData: {}
  },
  reducers: {
    setUserData: (state, action) => {
      if (action.payload) {
        state.userData = {...action.payload};
        saveToLocalStorage(state);
      }
    }
  },
});

export const {
  setUserData,
} = userSlice.actions;

export default userSlice.reducer;
