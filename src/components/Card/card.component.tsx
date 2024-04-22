import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCard, StyledCardImage } from './card.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type CardType = {
  id: number;
  poster: string;
  title: string;
  type: string;
  isFocussed?: boolean;
};

const Card = ({ id, poster, title, type, isFocussed }: CardType) => {
  const keypress = useSelector((state: RootState) => state.keypressReducer);
  const { pressEnter } = keypress;
  const [enter, setEnter] = useState(pressEnter);
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`/${type}/${id}`);
  };

  useEffect(() => {
    if (isFocussed) {
      if (pressEnter > enter) {
        setEnter(pressEnter);
        showDetails();
      }
    }
  }, [pressEnter]);

  return (
    <>
      <StyledCard id={`${id}`} className={isFocussed ? 'isFocussed' : ''}>
        <StyledCardImage src={poster} alt={title} className="card__poster" />
      </StyledCard>
    </>
  );
};

export default Card;
