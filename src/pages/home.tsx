import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { setYFocus } from '../reducers/focus';
import TrendingMovies from '../components/TrendingMovies';
import TrendingTV from '../components/TrendingTV';
import { StyledHome } from './home.styles';

const Home = () => {
  const dispatch = useAppDispatch();
  const focus = useSelector((state: RootState) => state.focusReducer);
  const [y, setY] = useState(focus.yFocus);
  const keypress = useSelector((state: RootState) => state.keypressReducer);
  const { pressUp, pressDown } = keypress;
  const [up, setUp] = useState(pressUp);
  const [down, setDown] = useState(pressDown);

  useEffect(() => {
    if (pressUp > up) {
      changeYFocus('up');
    }
  }, [pressUp]);

  useEffect(() => {
    if (pressDown > down) {
      changeYFocus('down');
    }
  }, [pressDown]);

  const changeYFocus = (key: string) => {
    let newY = 0;

    if (key === 'up') {
      if (y > 0) {
        newY = y - 1;
      }
      setUp(newY);
    }

    if (key === 'down') {
      // @TODO need to workout how many y positions there are
      if (y < 1) {
        newY = y + 1;
      } else {
        newY = 1;
      }
      setDown(newY);
    }

    dispatch(setYFocus(newY));
    setY(newY);
  };

  return (
    <StyledHome>
      <h1>This is the home page</h1>
      <TrendingMovies isFocussed={y === 0} />
      <TrendingTV isFocussed={y === 1} />
    </StyledHome>
  );
};

export default Home;
