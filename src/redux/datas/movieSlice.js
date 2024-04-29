import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
  try {
    const response = await fetch(
      "https://api.collectapi.com/watching/moviesComing",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "apikey 2ZnEUxbfTK3ec5j3MwZEZs:4c4AZSSDLmW613kckC5e3l",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Veriler alınamadı.");
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Error("Veriler alınamadı.");
  }
});

export const fetchMovies = () => async (dispatch, getState) => {
  try {
    await dispatch(getMovies());
    const movies = getState().movie.movies;
    if (movies.length > 0) {
      console.log("Veriler başarıyla alındı:", movies);
    } else {
      console.log("Veriler alınamadı veya boş.");
    }
  } catch (error) {
    console.error("Veriler alınırken bir hata oluştu:", error);
  }
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;