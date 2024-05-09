import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: undefined,
  text: undefined,
  image: undefined,
  detailModalState: false,
}

export const NewsSlice = createSlice({
  name: 'NewsSlice',
  initialState,
  reducers: {
    selectNews: (state, action) => {
      state.title = action.payload.title;
      state.text = action.payload.text;
      state.image = action.payload.image;
      state.detailModalState = action.payload.detailModalState;
    },
    resetNews: (state, action) => {
      state.title = undefined;
      state.text = undefined;
      state.image = undefined;
      state.detailModalState = false;
    }
  },
})

export const { selectNews, resetNews } = NewsSlice.actions

export default NewsSlice.reducer