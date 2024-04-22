import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import imageConfigReducer from './reducers/imageConfig';
import trendingMoviesReducer from './reducers/trendingMovies';
import trendingTVReducer from './reducers/trendingTV';
import detailsReducer from './reducers/details';
import keypressReducer from './reducers/keypress';
import focusReducer from './reducers/focus';

export const store = configureStore({
  reducer: {
    imageConfigReducer: imageConfigReducer,
    trendingMoviesReducer: trendingMoviesReducer,
    trendingTVReducer: trendingTVReducer,
    detailsReducer: detailsReducer,
    keypressReducer: keypressReducer,
    focusReducer: focusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
