import * as React from 'react';
import Svg, {Path, Circle, SvgProps} from 'react-native-svg';

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
      d="M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72Z"
    />
    <Circle
      cx={128}
      cy={128}
      r={40}
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
    />
  </Svg>
);

export default SvgComponent;
