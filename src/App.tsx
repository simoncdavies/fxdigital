import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useAppDispatch, RootState } from './store';
import { fetchImageConfig } from './reducers/imageConfig';
import Home from './pages/home';
import Details from './pages/details';
import {
  pressDown,
  pressEnter,
  pressLeft,
  pressRight,
  pressUp,
} from './reducers/keypress';

const App = () => {
  const dispatch = useAppDispatch();
  const imageConfig: any = useSelector(
    (state: RootState) => state.imageConfigReducer.imageConfig
  );
  const imageConfigLoading = useSelector(
    (state: RootState) => state.imageConfigReducer.loading
  );
  const imageConfigError = useSelector(
    (state: RootState) => state.imageConfigReducer.error
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchImageConfig({ test: '' }));
  }, [dispatch]);

  const handleKeyPress = (event: any) => {
    switch (event.keyCode) {
      case 13:
        dispatch(pressEnter(1));
        break;
      case 37:
        dispatch(pressLeft(1));
        break;
      case 38:
        dispatch(pressUp(1));
        break;
      case 39:
        dispatch(pressRight(1));
        break;
      case 40:
        dispatch(pressDown(1));
        break;
      default:
    }
  };

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Details type="movie" />} />
        <Route path="/tv/:id" element={<Details type="tv" />} />
      </Routes>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  .lato-regular {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .lato-regular-italic {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .lato-bold {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .lato-bold-italic {
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-style: italic;
  }
  
  body {
    all: unset;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: black;
  }
`;

export default App;
