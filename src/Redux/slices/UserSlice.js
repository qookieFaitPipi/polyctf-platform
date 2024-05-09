import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: undefined,
  accessToken: undefined,
  image: undefined,
}

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload.userLogin;
      state.accessToken = action.payload.accessToken;
      document.cookie = "token=" + action.payload.accessToken;
    },
    logout: (state) => {
      state.userLogin = null;
      document.cookie = "token=";
    },
    setUserInfo: (state, action) => {
      state.username = action.payload.username;
      state.image = action.payload.image;
    }
  },
})

export const { login, logout, setUserInfo } = UserSlice.actions

export default UserSlice.reducer