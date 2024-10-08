import {selectColors, selectIsDarkMode} from '../store/selectors';
import {useAppSelector} from './reduxHooks';

export const useColors = () => {
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const colors = useAppSelector(state => selectColors(state, isDarkMode));
  return colors;
};
