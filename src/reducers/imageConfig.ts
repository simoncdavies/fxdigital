import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchImageConfig = createAsyncThunk<
  string[],
  { test: string },
  { rejectValue: string }
>('fetchImageConfig', async (params, thunkAPI) => {
  try {
    const endpoint: string = `${process.env.REACT_APP_API_ENDPOINT}/config`;
    const response = await axios.get(endpoint, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // needs error checking to make sure objects exist
    // console.log(response.data.images);
    return response.data.images;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch image config');
  }
});

type ImageConfigState = {
  imageConfig: {}[];
  loading: boolean;
  error: string | null;
};

const initialState: ImageConfigState = {
  imageConfig: [],
  loading: false,
  error: null,
};

export const imageConfigSlice = createSlice({
  name: 'imageConfig',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImageConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImageConfig.fulfilled, (state, action) => {
        state.loading = false;
        state.imageConfig = action.payload;
      })
      .addCase(fetchImageConfig.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});
export default imageConfigSlice.reducer;
