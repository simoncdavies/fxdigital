import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import { fetchDetails } from '../reducers/details';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Details from '../components/Details';

type DetailsType = {
  type: string;
};

const DetailsContainer = ({ type }: DetailsType) => {
  const { id } = useParams() as { id: string };
  const dispatch = useAppDispatch();

  const details: any = useSelector(
    (state: RootState) => state.detailsReducer.details
  );
  const detailsLoading = useSelector(
    (state: RootState) => state.detailsReducer.loading
  );
  const detailsError = useSelector(
    (state: RootState) => state.detailsReducer.error
  );

  useEffect(() => {
    dispatch(fetchDetails({ id: parseInt(id, 10), type: type }));
  }, [dispatch]);

  return (
    <>
      {detailsLoading && <Loading />}
      {detailsError && <Error message={detailsError} />}
      {!detailsLoading && !detailsError && (
        <Details details={details} type={type} />
      )}
    </>
  );
};

export default DetailsContainer;
