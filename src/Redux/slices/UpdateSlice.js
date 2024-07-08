import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  updateState: undefined
}

export const UpdateSlice = createSlice({
  name: 'UpdateSlice',
  initialState,
  reducers: {
    setUpdateState: (state, action) => {
      state.updateState = action.payload;
    },
  },
})

export const { setUpdateState } = UpdateSlice.actions

export default UpdateSlice.reducer