import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {sharedColors} from '../colors/colors';

interface CustomSvgProps extends SvgProps {
  color?: string;
}

const SvgComponent: React.FC<CustomSvgProps> = ({
  color = sharedColors.black,
  ...props
}) => (
  <Svg
    width={336}
    height={386.667}
    viewBox="0 0 252 290"
    fill={color}
    {...props}>
    <Path d="M48 43.9c-6.9 2.2-13 7.3-16.6 14.1-1.8 3.3-1.9 7.8-2.2 87.9-.3 92.9-.5 89.7 5.8 97.3 6.7 8.1 20.5 11.3 30.2 7 2.6-1.1 14.1-10.6 28.7-23.5 25.5-22.8 27-23.7 34.5-22.3 2.6.5 9.2 5.8 27.7 22.3 14.6 12.9 26.1 22.4 28.7 23.5 14.2 6.3 32-2.5 35.2-17.5.8-3.7 1-29.7.8-88.2-.3-78.7-.4-83.2-2.2-86.5-2.6-4.9-7.4-9.8-12.1-12.3-4-2.2-4.2-2.2-80-2.4-41.8-.1-77.1.2-78.5.6z" />
  </Svg>
);

export default SvgComponent;
