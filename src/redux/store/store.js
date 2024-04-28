import { configureStore } from '@reduxjs/toolkit'
import  movieSlice  from '../datas/movieSlice'

export const store = configureStore({
  reducer: {
    movie: movieSlice
  },
})