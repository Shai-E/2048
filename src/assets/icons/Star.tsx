import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {useColors} from '../../hooks/useColors';

interface CustomSvgProps extends SvgProps {
  fill?: string;
  stroke?: string;
}

const SvgComponent: React.FC<CustomSvgProps> = ({fill, stroke, ...props}) => {
  const colors = useColors();

  return (
    <Svg width={24} height={24} viewBox="0 0 53.867 53.867" {...props}>
      <Path
        d="m26.934 1.318 8.322 16.864 18.611 2.705L40.4 34.013l3.179 18.536-16.645-8.751-16.646 8.751 3.179-18.536L0 20.887l18.611-2.705z"
        fill={fill || colors.bright}
        stroke={stroke ? stroke : fill ? colors.bright : undefined}
        strokeWidth={fill ? 4 : undefined}
      />
    </Svg>
  );
};
export default SvgComponent;
