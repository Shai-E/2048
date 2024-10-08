import React, {memo, useEffect, useRef, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  TextInputProps,
} from 'react-native';
// styles
import EyeIcon from '@assets/icons/Eye';
import EyeOffIcon from '@assets/icons/EyeOff';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useColors} from '@hooks/useColors';
import {wp} from '@services/dimensions/dimensions';
// form
import {
  Controller,
  FieldError,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form';

interface InputElementProps extends TextInputProps {
  // mandatory props
  name: string;
  placeholder: string;
  // optional props
  secureTextEntry?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  // optional props for form validation without form
  handleInputChange?: (name: string, text: string) => void;
  validateInput?: (text: string) => boolean;
  errorMessage?: string;
  // optional props for form validation with react hook form
  control?: any;
  error?: FieldError;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
      >
    | undefined;
}

const InputElement: React.FC<InputElementProps> = ({
  placeholder,
  leftIcon,
  rightIcon,
  error,
  errorMessage,
  validateInput,
  secureTextEntry,
  handleInputChange,
  name,
  control,
  rules,
  ...props
}) => {
  const colors = useColors();
  const [text, setText] = useState('');
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  const [isValid, setIsValid] = useState(true);
  const isTouched = useRef(false);

  useEffect(() => {
    handleInputChange && handleInputChange(name, text);
  }, [text]);

  const labelPositionY = useSharedValue(0);
  const labelPositionX = useSharedValue(0);
  const labelSize = useSharedValue(16);
  const labelPadding = useSharedValue(0);
  const inputRef = useRef<TextInput>(null);

  const isLeftIcon = secureTextEntry || leftIcon;

  const handleFocus = () => {
    animateLabel(-20, 12, 10, isLeftIcon ? -45 : -10);
  };
  const handleBlur = () => !text && animateLabel(0, 16, 0, 0);
  const handleChangeText = (input: string) => {
    isTouched.current = true;
    setText(input);
    validateInput && setIsValid(validateInput(input));
  };

  const animateLabel = (
    y: number,
    size: number,
    padding: number,
    x: number,
  ) => {
    labelPositionY.value = withTiming(y, {duration: 150});
    labelSize.value = withTiming(size, {duration: 150});
    labelPadding.value = withTiming(padding, {duration: 150});
    labelPositionX.value = withTiming(x, {duration: 150});
  };

  const labelStyle = useAnimatedStyle(() => ({
    transform: [
      {translateY: labelPositionY.value},
      {translateX: labelPositionX.value},
    ],
    fontSize: labelSize.value,
    paddingHorizontal: labelPadding.value,
  }));

  const dynamicStyles = StyleSheet.create({
    disabledContainer: {
      backgroundColor: colors.placeholder,
    },
    inputContainer: {
      borderColor: (error || !isValid) ? colors.warning : colors.placeholder,
    },
    label: {left: isLeftIcon ? 50 : 15, color: colors.primaryText,
      backgroundColor: colors.primary,
    },
    disabledLabel: {
      left: isLeftIcon ? 50 : 15, color: colors.primaryText,
      backgroundColor: colors.placeholder,
    },
    input: {
      color: colors.primaryText,
    },
    errorText: {
      color: colors.warning,
    },
  });

  const displayLeftIcon = isLeftIcon && (
    <Pressable
      onPress={() => {
        inputRef.current?.focus();
        secureTextEntry && setIsSecure(prev => !prev);
      }}
      style={styles.icon}>
      {secureTextEntry ? (
        isSecure ? (
          <EyeOffIcon height={22} width={22} color={colors.primaryText} />
        ) : (
          <EyeIcon height={22} width={22} color={colors.primaryText} />
        )
      ) : (
        leftIcon
      )}
    </Pressable>
  );

  const displayRightIcon = rightIcon && (
    <View style={styles.icon}>{rightIcon}</View>
  );

  const animatedLabel = (
    <Animated.Text style={[styles.label, props.editable === false ? dynamicStyles.disabledLabel : dynamicStyles.label, labelStyle]}>
      {placeholder}
    </Animated.Text>
  );

  const input = control ? (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => {
        return (
          <TextInput
            ref={inputRef}
            style={[styles.input, dynamicStyles.input]}
            onFocus={handleFocus}
            onBlur={() => {
              handleBlur();
              onBlur();
            }}
            onChangeText={onChangeTextValue => {
              handleChangeText(onChangeTextValue);
              onChange(onChangeTextValue);
            }}
            secureTextEntry={isSecure}
            value={value}
            {...props}
          />
        );
      }}
    />
  ) : (
    <TextInput
      ref={inputRef}
      style={[styles.input, dynamicStyles.input]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChangeText={handleChangeText}
      secureTextEntry={isSecure}
      {...props}
    />
  );

  const displayError = (error?.message || !isValid) && (
    <Text style={[styles.errorText, dynamicStyles.errorText]}>
      {error?.message || errorMessage || 'Invalid input'}
    </Text>
  );
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={[styles.inputContainer, props.editable === false ? dynamicStyles.disabledContainer : dynamicStyles.inputContainer]}>
          {displayLeftIcon}
          {animatedLabel}
          {input}
          {displayRightIcon}
        </View>
        {displayError}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: wp('90%'),
    marginHorizontal: 'auto',
  },
  icon: {
    marginHorizontal: 5,
  },
  label: {
    position: 'absolute',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    fontSize: 12,
    marginTop: 5,
    width: wp('90%'),
    marginHorizontal: 'auto',
  },
});

export default memo(InputElement);
