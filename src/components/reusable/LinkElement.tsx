import React from 'react';
import {StyleSheet, TouchableOpacity, Linking} from 'react-native';
// Components
import TextElement from '@reusable/TextElement';
// styles
import {useColors} from '@hooks/useColors';

interface LinkElementType {
  children: JSX.Element | JSX.Element[] | string;
  url: string;
}

const LinkElement: React.FC<LinkElementType> = ({children, url}) => {
  const colors = useColors();
  const styles = StyleSheet.create({
    linkColor: {
      color: colors.active,
    },
  });

  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <TextElement style={styles.linkColor}>{children}</TextElement>
    </TouchableOpacity>
  );
};


export default LinkElement;
