import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedTaskId: undefined,
  selectedTask: {},
}

export const TaskSlice = createSlice({
  name: 'TaskSlice',
  initialState,
  reducers: {
    selectTaskId: (state, action) => {
      state.selectedTaskId = action.payload;
    },
    selectTask: (state, action) => {
      state.selectedTask = action.payload;
    },
    resetTask: (state, action) => {
      state.selectedTaskId = undefined
      state.selectedTask = {}
    }
  },
})

export const { selectTaskId, selectTask, resetTask } = TaskSlice.actions

export default TaskSlice.reducer