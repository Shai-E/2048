export type ColorTheme = {
  primary: string;
  oppositeBg: string;
  primaryText: string;
  warning: string;
  subtle: string;
  placeholder: string;
  bright: string;
  active: string;
  transparent: string;
  border: string;
  black: string;
  white: string;
};

export const sharedColors = {
  black: '#000000',
  white: '#FFFFFF',
};

type SharedColors = typeof sharedColors;

export type TColors = ColorTheme & SharedColors;

export type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

const Colors: ColorPalettes = {
  dark: {
    primary: '#0d1117',
    oppositeBg: sharedColors.white,
    primaryText: sharedColors.white,
    warning: '#ff0000',
    subtle: '#dddddd',
    placeholder: '#484f58',
    bright: '#efce4a',
    active: '#007BFF',
    transparent: 'transparent',
    border: '#cccccc',
    ...sharedColors,
  },
  light: {
    primary: sharedColors.white,
    oppositeBg: '#0d1117',
    primaryText: '#0d1117',
    warning: '#ff0000',
    subtle: '#555555',
    placeholder: '#bbbbbb',
    bright: '#efce4a',
    active: '#007BFF',
    transparent: 'transparent',
    border: '#dddddd',
    ...sharedColors,
  },
};

export default Colors;
