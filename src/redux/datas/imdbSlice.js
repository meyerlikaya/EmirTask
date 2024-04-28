import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  status: "idle",
  error: null,
};

export const getImdb = createAsyncThunk("movies/getImdb", async () => {
  try {
    const response = await fetch(
      "https://api.collectapi.com/watching/moviesImdb",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "apikey 25732RzoKtA9w0X1sEMEXi:7yFJZ8Dup8ocI9IugcoUPr",
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
    await dispatch(getImdb());
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

export const getMoviesByName = createAsyncThunk(
  "movies/getMoviesByName",
  async (name) => {
    try {
      const response = await fetch(
        "https://api.collectapi.com/watching/moviesImdb",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "apikey 6UdRoL7rf85pUcid9WXcKa:3Ztx8t6BdQNbyBwMuoBHpU",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Veriler alınamadı.");
      }
      const data = await response.json();

      for (let index = 0; index < data.result.length; index++) {
        const element = data.result[index];

        if (element.name === name) {
          return element;
        }
      }

      return null;
    } catch (error) {
      throw new Error("Veriler alınamadı.");
    }
  }
);

const imdbSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImdb.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getImdb.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload;
      })
      .addCase(getImdb.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getMoviesByName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMoviesByName.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = [action.payload];
      })
      .addCase(getMoviesByName.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default imdbSlice.reducer;
