import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { setXFocus } from '../../reducers/focus';
import Card from '../Card';
import { StyledRail } from './rail.styles';

type RailType = {
  id: number;
  poster_path: string;
  title: string;
  focusY: string;
};

const Rail = ({
  content,
  type,
  isFocussed,
}: {
  content: RailType[];
  type: string;
  isFocussed: boolean;
}) => {
  const dispatch = useAppDispatch();
  const imageConfig: any = useSelector(
    (state: RootState) => state.imageConfigReducer.imageConfig
  );
  const {
    base_url,
    poster_sizes,
  }: { base_url: string; poster_sizes: string[] } = imageConfig;

  const keypress = useSelector((state: RootState) => state.keypressReducer);
  const { pressLeft, pressRight } = keypress;
  const [left, setLeft] = useState(pressLeft);
  const [right, setRight] = useState(pressRight);
  const focus = useSelector((state: RootState) => state.focusReducer);
  const [x, setX] = useState(isFocussed ? focus.xFocus : 0);
  const [marginLeft, setMarginLeft] = useState(0);

  useEffect(() => {
    if (isFocussed && pressLeft > left) {
      changeXFocus('left');
    }
  }, [pressLeft]);

  useEffect(() => {
    if (isFocussed && pressRight > right) {
      changeXFocus('right');
    }
  }, [pressRight]);

  const changeXFocus = (key: string) => {
    let newX = 0;

    if (key === 'left') {
      if (x > 0) {
        newX = x - 1;
      }
      setLeft(newX);
    }

    if (key === 'right') {
      // @TODO need to workout how many x positions there are
      if (x < 19) {
        newX = x + 1;
      } else {
        newX = 19;
      }
      setRight(newX);
    }

    dispatch(setXFocus(newX));
    setX(newX);
  };

  useEffect(() => {
    if (isFocussed) {
      let newMarginLeft = 0;
      let maxX = 15; // @TODO this can't be hardcoded!

      if (x < maxX) {
        newMarginLeft = x;
      } else {
        newMarginLeft = maxX;
      }
      setMarginLeft(newMarginLeft);
    }
  }, [x]);

  return (
    <StyledRail marginleft={marginLeft}>
      {base_url &&
        content.map((item: RailType, index: number) => {
          const { id, poster_path, title } = item;
          const poster = base_url + poster_sizes[2] + poster_path;
          const cardFocus = isFocussed && index === x;

          return (
            <Card
              id={id}
              poster={poster}
              title={title}
              type={type}
              isFocussed={cardFocus}
              key={id}
            />
          );
        })}
    </StyledRail>
  );
};

export default Rail;
