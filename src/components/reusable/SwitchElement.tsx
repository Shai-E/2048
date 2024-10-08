import React, {useState} from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
// components
import TextElement from '@reusable/TextElement';
// styles
import {useColors} from '@hooks/useColors';
import {wp} from '@services/dimensions/dimensions';

type SwitchElementProps = {
  label: string;
  initialValue?: boolean;
  cb?: (value: boolean) => void;
};

const SwitchElement: React.FC<SwitchElementProps> = ({
  label,
  initialValue,
  cb,
}) => {
  const [value, setValue] = useState(initialValue || false);
  const colors = useColors();
  const translateX = useSharedValue(value ? 19 : 2);

  const toggleSwitch = () => {
    const newValue = !value;
    setValue(newValue);
    translateX.value = withTiming(newValue ? 19 : 2, {duration: 200});
    cb && cb(newValue);
  };

  const animatedThumbStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  return (
    <View style={styles.switchElementContainer}>
      <TextElement style={{color: colors.primaryText}}>{label}</TextElement>
      <TouchableWithoutFeedback onPress={toggleSwitch}>
        <View
          style={[
            styles.switch,
            {backgroundColor: value ? colors.active : colors.placeholder},
          ]}>
          <Animated.View style={[styles.switchThumb, animatedThumbStyle]} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  switchElementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    // paddingHorizontal: 20,
    marginHorizontal: wp('5%'),
    borderRadius: 8,
  },
  switch: {
    width: 52,
    height: 32,
    borderRadius: 16,
    padding: 2,
    justifyContent: 'center',
  },
  switchThumb: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default SwitchElement;
