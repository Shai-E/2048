import {Dimensions} from 'react-native';

export enum PropDimensions {
  fullWidth = Dimensions.get('window').width,
  tabWidth = Dimensions.get('window').width,
  tabHight = Dimensions.get('window').height * 0.1,
  buttonWidth = Dimensions.get('window').width * 0.85,
  buttonHight = Dimensions.get('window').height * 0.06,
  fullHight = Dimensions.get('window').height,
  cardWidth = Dimensions.get('window').width * 0.9,
  cardHeight = Dimensions.get('window').height * 0.65,
  favoriteHeaderHeight = Dimensions.get('window').height * 0.15,
  favoriteHeaderWidth = Dimensions.get('window').width * 0.85,
  favoriteWidth = Dimensions.get('window').width * 0.85,
  favoriteHeight = Dimensions.get('window').height * 0.08,
  trendsHeight = Dimensions.get('window').height * 0.8,
  maxModalHeight = Dimensions.get('window').height * 0.7,
  messageModalHeight = Dimensions.get('window').height * 0.15,
  inputContainerHight = Dimensions.get('window').height * 0.1,
  inputHight = Dimensions.get('window').height * 0.07,
  inputWidth = Dimensions.get('window').width * 0.85,
  searchWidth = Dimensions.get('window').width * 0.85,
  searchHeight = Dimensions.get('window').height * 0.25,
  chatHeaderHeight = Dimensions.get('window').height * 0.12,
}

const percentToNumber = (percent: number | string) => {
  if (typeof percent === 'string' && percent.includes('%')) {
    percent = parseFloat(percent.replace('%', ''));
  } else if (typeof percent === 'string') {
    percent = parseFloat(percent);
  }
  return percent;
};

export const hp = (percent: number | string) => {
  percent = percentToNumber(percent);
  return (percent / 100) * PropDimensions.fullHight;
};

export const wp = (percent: number | string) => {
  percent = percentToNumber(percent);
  return (percent / 100) * PropDimensions.fullWidth;
};
