import {createSlice} from '@reduxjs/toolkit';
// types
import Colors from '../../assets/colors/colors';

const initialState = {
  palette: Colors,
  isDarkMode: false,
};

export const constantsSlice = createSlice({
  name: 'constants',
  initialState: initialState,
  reducers: {
    toggleDarkMode: state => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const {
  toggleDarkMode,
} = constantsSlice.actions;

export default constantsSlice.reducer;
