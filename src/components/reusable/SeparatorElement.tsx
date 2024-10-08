import React from 'react';
import {StyleSheet, View} from 'react-native';
// styles
import {useColors} from '@hooks/useColors';

type SeparatorElementProps = {
  color?: string;
};

const SeparatorElement: React.FC<SeparatorElementProps> = ({color}) => {
  const colors = useColors();
  return (
    <View
      style={[styles.separator, {backgroundColor: color || colors.primaryText}]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
});

export default SeparatorElement;
