import { createSlice } from '@reduxjs/toolkit';

type FocusType = {
  xFocus: number;
  yFocus: number;
};

const initialState: FocusType = {
  xFocus: 0,
  yFocus: 0,
};

const focusSlice = createSlice({
  name: 'focus',
  initialState,
  reducers: {
    setXFocus: (state, action) => {
      return {
        ...state,
        xFocus: action.payload,
      };
    },
    setYFocus: (state, action) => {
      return {
        ...state,
        yFocus: action.payload,
      };
    },
  },
});

export const { setXFocus, setYFocus } = focusSlice.actions;

export default focusSlice.reducer;
