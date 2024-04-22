import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTrendingTV = createAsyncThunk<string[], { type: string }, { rejectValue: string }>(
  'fetchTrendingTV',
  async (params, thunkAPI) => {
    try {
      const endpoint: string = `${process.env.REACT_APP_API_ENDPOINT}/trending/tv`;
      const response = await axios.get(endpoint, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // needs error checking to make sure objects exist
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch trending tv");
    }
  }
);

type TrendingTVState = {
  trendingTV: {}[];
  loading: boolean;
  error: string | null;
}

const initialState: TrendingTVState = {
  trendingTV: [],
  loading: false,
  error: null,
};

export const trendingTVSlice = createSlice({
  name: 'trendingTV',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingTV.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingTV.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingTV = action.payload;
      })
      .addCase(fetchTrendingTV.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});
export default trendingTVSlice.reducer;
