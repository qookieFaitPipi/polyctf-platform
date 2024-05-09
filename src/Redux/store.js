import { configureStore } from '@reduxjs/toolkit'

// slices
import UserSlice from './slices/UserSlice'
import TaskSlice from './slices/TaskSlice'
import NewsSlice from './slices/NewsSlice'

export const store = configureStore({
  reducer: {
    UserSlice: UserSlice,
    TaskSlice: TaskSlice,
    NewsSlice: NewsSlice,
  },
})