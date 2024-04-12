import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userLogin: undefined,
  accessToken: undefined,
  isEntered: false
}

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload.userLogin;
      state.accessToken = action.payload.accessToken;
      state.isEntered = true;
      document.cookie = "token=" + action.payload.accessToken;
    },
    logout: (state) => {
      state.userLogin = null;
      state.isEntered = false;
      document.cookie = "token=";
    },
  },
})

export const { login, logout } = UserSlice.actions

export default UserSlice.reducer