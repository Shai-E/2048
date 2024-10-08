import React from 'react';
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Platform,
  DimensionValue,
  ActivityIndicator,
} from 'react-native';
// components
import TextElement from '@reusable/TextElement';
// styles
import {useColors} from '@hooks/useColors';
import {hp, wp} from '@services/dimensions/dimensions';
// types
import {ButtonSizesType, FontSizesType} from '@fixtures/defaults';

type ButtonElementProps = {
  label: string;
  onPress(): void;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  fontSize?: FontSizesType;
  buttonSize?: ButtonSizesType;
  style?: object;
  setSpinner?: boolean;
};

const buttonSizes = {
  small: {
    height: hp('4%'),
    width: wp('30%'),
    marginStart: wp('5%'),
    marginEnd: 'auto',
  },
  medium: {
    height: hp('6%'),
    width: wp('90%'),
    marginStart: 'auto',
    marginEnd: 'auto',
  },
  large: {
    height: hp('8%'),
    width: wp('90%'),
    marginStart: 'auto',
    marginEnd: 'auto',
  },
  auto: {
    height: hp('6%'),
    width: undefined,
    marginStart: 'auto',
    marginEnd: 'auto',
  },
};

const ButtonElement: React.FC<ButtonElementProps> = ({
  label,
  onPress,
  backgroundColor,
  borderColor,
  fontSize = 'lg',
  buttonSize = 'medium',
  titleColor,
  style,
  setSpinner,
}) => {
  const colors = useColors();
  const DynamicButton = Platform.OS === 'ios' ? TouchableOpacity : Pressable;
  const styles = StyleSheet.create({
    container: {
      borderRadius: 5,
      borderWidth: 1,
      width: buttonSizes[buttonSize].width,
      marginStart: buttonSizes[buttonSize].marginStart as DimensionValue,
      marginEnd: buttonSizes[buttonSize].marginEnd as DimensionValue,
      height: buttonSizes[buttonSize].height,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <DynamicButton
      onPress={onPress}
      android_ripple={{
        color: colors.placeholder,
        borderless: false,
        radius: wp('100%'),
        foreground: false,
      }}
      activeOpacity={0.6}
      style={[
        styles.container,
        {
          borderColor: borderColor || colors.active,
          backgroundColor: backgroundColor || colors.active,
        },
        style,
      ]}>
      {setSpinner ? (
        <ActivityIndicator size={'large'} color={colors.white} />
      ) : (
        <TextElement
          style={{color: titleColor || colors.white}}
          fontSize={fontSize}>
          {label}
        </TextElement>
      )}
    </DynamicButton>
  );
};

export default ButtonElement;
