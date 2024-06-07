import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: undefined,
  accessToken: undefined,
  image: undefined,
  needUpdate: false,
}

export const UserSlice = createSlice({
  name: 'UserSlice',
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken;
      document.cookie = "token=" + action.payload.accessToken;
    },
    logout: () => {
      document.cookie = "token=";
    },
    setUserInfo: (state, action) => {
      state.username = action.payload.username;
      state.image = action.payload.image;
    },
    setUpdate: (state, action) => {
      state.needUpdate = action.payload;
    }
  },
})

export const { login, logout, setUserInfo, setUpdate } = UserSlice.actions

export default UserSlice.reducer