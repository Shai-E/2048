import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export interface CustomSvgProps extends SvgProps {
  color?: string;
}

const SvgComponent: React.FC<CustomSvgProps> = props => (
  <Svg viewBox="0 0 256 256" {...props}>
    <Path fill="none" d="M0 0h256v256H0z" />
    <Path
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="m48 40 160 176M154.9 157.6A39.6 39.6 0 0 1 128 168a40 40 0 0 1-26.9-69.6"
    />
    <Path
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M74 68.6C33.2 89.2 16 128 16 128s32 72 112 72a117.9 117.9 0 0 0 54-12.6M208.6 169.1C230.4 149.6 240 128 240 128s-32-72-112-72a123.9 123.9 0 0 0-20.7 1.7"
    />
    <Path
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="M135.5 88.7a39.9 39.9 0 0 1 32.3 35.5"
    />
  </Svg>
);

export default SvgComponent;
