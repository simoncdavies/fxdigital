import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { fetchTrendingTV } from '../../reducers/trendingTV';
import Rail from '../Rail';
import Loading from '../Loading';
import Error from '../Error';
import { StyledTrendingTV, StyledTrendingTVTitle } from './trending-tv.styles';

const TrendingTV = ({ isFocussed }: { isFocussed: boolean }) => {
  const dispatch = useAppDispatch();
  const trendingTV: any = useSelector(
    (state: RootState) => state.trendingTVReducer.trendingTV
  );
  const trendingTVLoading = useSelector(
    (state: RootState) => state.trendingTVReducer.loading
  );
  const trendingTVError = useSelector(
    (state: RootState) => state.trendingTVReducer.error
  );

  useEffect(() => {
    dispatch(fetchTrendingTV({ type: 'tv' }));
  }, [dispatch]);

  return (
    <StyledTrendingTV>
      <StyledTrendingTVTitle>Trending TV</StyledTrendingTVTitle>
      {trendingTVLoading && <Loading />}
      {trendingTVError && <Error message={trendingTVError} />}
      {!trendingTVLoading && !trendingTVError && (
        <Rail content={trendingTV} type="tv" isFocussed={isFocussed} />
      )}
    </StyledTrendingTV>
  );
};

export default TrendingTV;
