// types
import {RootState} from './store';
import {ColorTheme} from '../assets/colors/colors';

export const selectColors = (
  state: RootState,
  isDarkMode: boolean,
): ColorTheme => state.constants.palette[isDarkMode ? 'dark' : 'light'];

export const selectIsDarkMode = (state: RootState) =>
  state.constants.isDarkMode;
