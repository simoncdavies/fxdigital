import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { fetchTrendingMovies } from '../../reducers/trendingMovies';
import Error from '../Error';
import Loading from '../Loading';
import Rail from '../Rail';
import {
  StyledTrendingMovies,
  StyledTrendingMoviesTitle,
} from './trending-movies.styles';

const TrendingMovies = ({ isFocussed }: { isFocussed: boolean }) => {
  const dispatch = useAppDispatch();
  const trendingMovies: any = useSelector(
    (state: RootState) => state.trendingMoviesReducer.trendingMovies
  );
  const trendingMoviesLoading = useSelector(
    (state: RootState) => state.trendingMoviesReducer.loading
  );
  const trendingMoviesError = useSelector(
    (state: RootState) => state.trendingMoviesReducer.error
  );

  useEffect(() => {
    dispatch(fetchTrendingMovies({ type: 'movie' }));
  }, [dispatch]);

  return (
    <StyledTrendingMovies>
      <StyledTrendingMoviesTitle>Trending Movies</StyledTrendingMoviesTitle>
      {trendingMoviesLoading && <Loading />}
      {trendingMoviesError && <Error message={trendingMoviesError} />}
      {!trendingMoviesLoading && !trendingMoviesError && (
        <Rail content={trendingMovies} type="movie" isFocussed={isFocussed} />
      )}
    </StyledTrendingMovies>
  );
};

export default TrendingMovies;
