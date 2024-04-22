import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetails = createAsyncThunk<
  string[],
  { id: number; type: string },
  { rejectValue: string }
>('fetchDetails', async ({ id, type }, thunkAPI) => {
  try {
    const endpoint: string = `${process.env.REACT_APP_API_ENDPOINT}/details/${type}/${id}`;
    const response = await axios.get(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // needs error checking to make sure objects exist
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      `Failed to fetch ${type} details for ${id}`
    );
  }
});

type DetailsState = {
  details: {}[];
  loading: boolean;
  error: string | null;
};

const initialState: DetailsState = {
  details: [],
  loading: false,
  error: null,
};

export const detailsSlice = createSlice({
  name: 'trendingMovies',
  initialState,
  reducers: {
    resetDetails: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(fetchDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const { resetDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
