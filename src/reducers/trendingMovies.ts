import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrendingMovies = createAsyncThunk<string[], { type: string }, { rejectValue: string }>(
  'fetchTrendingMovies',
  async (params, thunkAPI) => {
    try {
      const endpoint: string = `${process.env.REACT_APP_API_ENDPOINT}/trending/movie`;
      const response = await axios.get(endpoint, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // needs error checking to make sure objects exist
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch trending movies");
    }
  }
);

type TrendingMoviesState = {
  trendingMovies: {}[];
  loading: boolean;
  error: string | null;
}

const initialState: TrendingMoviesState = {
  trendingMovies: [],
  loading: false,
  error: null,
};

export const trendingMoviesSlice = createSlice({
  name: 'trendingMovies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingMovies = action.payload;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});
export default trendingMoviesSlice.reducer;
