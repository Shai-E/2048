import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface CustomSvgProps extends SvgProps {
  color?: string;
}

const SvgComponent: React.FC<CustomSvgProps> = ({
  color = '#030708',
  ...props
}) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M5.172 8 .586 3.414 3.414.586 8 5.172 12.586.586l2.828 2.828L10.828 8l4.586 4.586-2.828 2.828L8 10.83l-4.586 4.585-2.828-2.828L5.172 8Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
