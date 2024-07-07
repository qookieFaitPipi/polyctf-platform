import { configureStore } from '@reduxjs/toolkit'

// slices
import TaskSlice from './slices/TaskSlice';
import NewsSlice from './slices/NewsSlice';
import UpdateSlice from './slices/UpdateSlice';

export const store = configureStore({
  reducer: {
    TaskSlice: TaskSlice,
    NewsSlice: NewsSlice,
    UpdateSlice: UpdateSlice
  },
})