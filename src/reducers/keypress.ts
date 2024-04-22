import { createSlice } from '@reduxjs/toolkit';

type KeyPressType = {
  pressUp: number;
  pressDown: number;
  pressRight: number;
  pressLeft: number;
  pressEnter: number;
};

const initialState: KeyPressType = {
  pressUp: 0,
  pressDown: 0,
  pressRight: 0,
  pressLeft: 0,
  pressEnter: 0,
};

const keypressSlice = createSlice({
  name: 'keypress',
  initialState,
  reducers: {
    pressUp: (state, action) => {
      let { pressUp } = state;
      pressUp = pressUp + action.payload;
      return {
        ...state,
        pressUp,
      };
    },
    pressDown: (state, action) => {
      let { pressDown } = state;
      pressDown = pressDown + action.payload;
      return {
        ...state,
        pressDown,
      };
    },
    pressRight: (state, action) => {
      let { pressRight } = state;
      pressRight = pressRight + action.payload;
      return {
        ...state,
        pressRight,
      };
    },
    pressLeft: (state, action) => {
      let { pressLeft } = state;
      pressLeft = pressLeft + action.payload;
      return {
        ...state,
        pressLeft,
      };
    },
    pressEnter: (state, action) => {
      let { pressEnter } = state;
      pressEnter = pressEnter + action.payload;
      return {
        ...state,
        pressEnter,
      };
    },
  },
});

export const { pressUp, pressDown, pressRight, pressLeft, pressEnter } =
  keypressSlice.actions;

export default keypressSlice.reducer;
