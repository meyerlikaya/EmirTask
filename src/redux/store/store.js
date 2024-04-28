import { configureStore } from '@reduxjs/toolkit'
import  movieSlice  from '../datas/movieSlice'
import imdbSlice from '../datas/imdbSlice'

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    imdb: imdbSlice
  },
})