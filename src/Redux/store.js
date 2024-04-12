import { configureStore } from '@reduxjs/toolkit'

// slices
import UserSlice from './slices/UserSlice'

export const store = configureStore({
  reducer: {
    UserSlice: UserSlice,
  },
})