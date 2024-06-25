import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  UserId: undefined,
  UserName: undefined,
}

export const ProfileSlice = createSlice({
  name: 'ProfileSlice',
  initialState,
  reducers: {
    setProfile: (state, action) => {

    }
  },
})

export const { } = ProfileSlice.actions

export default ProfileSlice.reducer