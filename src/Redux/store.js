import { configureStore } from '@reduxjs/toolkit'

// slices
import UserSlice from './slices/UserSlice'
import TaskSlice from './slices/TaskSlice'

export const store = configureStore({
  reducer: {
    UserSlice: UserSlice,
    TaskSlice: TaskSlice,
  },
})