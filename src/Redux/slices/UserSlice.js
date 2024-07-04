import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: undefined,
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
      const cookies = document.cookie.split(";");

      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
      }
      state.userId = action.payload.userId;
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