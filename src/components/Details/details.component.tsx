import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  StyledDetails,
  StyledDetailsContainer,
  StyledDetailsTitle,
  StyledDetailsText,
  StyledDetailsImage,
  StyledDetailsButton,
} from './details.styles';

type DetailsType = {
  details: {
    backdrop_path: string;
    poster_path: string;
    title: string;
    name: string;
    overview: string;
    release_date: string;
    created_by: [
      {
        name: string;
      },
    ];
    credits: {
      cast: [];
      crew: [];
    };
    runtime: string;
    vote_average: string;
    vote_count: string;
  };
  type: string;
};

const Details = ({ details, type }: DetailsType) => {
  const imageConfig: any = useSelector(
    (state: RootState) => state.imageConfigReducer.imageConfig
  );
  const {
    base_url,
    poster_sizes,
    backdrop_sizes,
  }: { base_url: string; poster_sizes: string[]; backdrop_sizes: string[] } =
    imageConfig;

  const keypress = useSelector((state: RootState) => state.keypressReducer);
  const { pressEnter } = keypress;
  const [enter, setEnter] = useState(pressEnter);
  const navigate = useNavigate();

  const {
    backdrop_path,
    poster_path,
    title,
    name,
    overview,
    release_date,
    created_by,
    credits,
    runtime,
    vote_average,
    vote_count,
  } = details;
  let cast: any[] = [];
  let crew: any[] = [];
  if (credits) {
    cast = credits.cast;
    crew = credits.crew;
  }
  const poster = base_url + poster_sizes[3] + poster_path;
  const backdrop = base_url + backdrop_sizes[2] + backdrop_path;
  const actors = cast.filter(
    (item: any) => item.known_for_department === 'Acting'
  );
  const actorsString = actors
    .map((actor, index) => {
      if (index === actors.length - 1) {
        return actor.name;
      } else {
        return actor.name + ', ';
      }
    })
    .join('');

  const directors = crew.filter((item: any) => item.job === 'Director');

  const directorString = directors
    .map((director, index) => {
      if (index === directors.length - 1) {
        return director.name;
      } else {
        return director.name + ', ';
      }
    })
    .join('');

  let creatorString = '';
  if (created_by) {
    creatorString = created_by
      .map((creator, index) => {
        if (index === created_by.length - 1) {
          return creator.name;
        } else {
          return creator.name + ', ';
        }
      })
      .join('');
  }

  useEffect(() => {
    if (pressEnter > enter) {
      setEnter(pressEnter);
      navigate(-1);
    }
  }, [pressEnter]);

  const buttonFocussed = true;

  console.log(details);
  return (
    <StyledDetails background={backdrop}>
      <StyledDetailsContainer>
        <StyledDetailsTitle>{title ? title : name}</StyledDetailsTitle>
        <StyledDetailsImage src={poster} alt={title} />
        <StyledDetailsText>{overview}</StyledDetailsText>
        <StyledDetailsText>{release_date}</StyledDetailsText>
        {type === 'movie' && (
          <StyledDetailsText>{runtime} minutes</StyledDetailsText>
        )}
        <StyledDetailsText>
          <strong>{vote_average}</strong> ({vote_count} votes)
        </StyledDetailsText>
        {!created_by && (
          <StyledDetailsText>
            <strong>Directed by:</strong> {directorString}
          </StyledDetailsText>
        )}
        {created_by && (
          <StyledDetailsText>
            <strong>Created by:</strong> {creatorString}
          </StyledDetailsText>
        )}
        <StyledDetailsText>
          <strong>Starring:</strong> {actorsString}
        </StyledDetailsText>
        <StyledDetailsButton
          type="button"
          className={buttonFocussed ? 'isFocussed' : ''}
        >
          Back
        </StyledDetailsButton>
      </StyledDetailsContainer>
    </StyledDetails>
  );
};

export default Details;
