import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {sharedColors} from '../colors/colors';

export interface CustomSvgProps extends SvgProps {
  color?: string;
}

const SvgComponent: React.FC<CustomSvgProps> = ({
  color = sharedColors.black,
  ...props
}) => (
  <Svg viewBox="0 0 576 512" fill={color} {...props}>
    <Path d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z" />
  </Svg>
);

export default SvgComponent;
