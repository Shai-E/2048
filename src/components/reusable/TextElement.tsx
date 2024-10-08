import React from 'react';
import {Text, StyleSheet, TextProps, View} from 'react-native';
// fixtures
import {defaultFont, fontSizes, FontSizesType} from '@fixtures/defaults';

interface TextElementProps extends TextProps {
  style?: any;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikeThrough?: boolean;
  unorderedListItem?: boolean;
  orderedListItem?: number;
  blockquote?: boolean;
  inlineCode?: boolean;
  link?: string;
  gap?: number;
  children: JSX.Element | JSX.Element[] | string;
  fontSize?: FontSizesType;
}

const TextElement: React.FC<TextElementProps> = ({
  style,
  children,
  bold,
  italic,
  underline,
  strikeThrough,
  unorderedListItem,
  orderedListItem,
  link,
  gap,
  fontSize = 'm',
  ...props
}) => {

  const styles = StyleSheet.create({
    default: {
      fontFamily: defaultFont.familiy,
      fontSize: fontSizes[fontSize],
      marginHorizontal: 5,
      fontWeight: bold ? 'bold' : undefined,
      fontStyle: italic ? 'italic' : undefined,
      textDecorationLine: underline
        ? 'underline'
        : strikeThrough
        ? 'line-through'
        : undefined,
      color: link ? link : undefined,
      marginVertical: gap,
    },
    textWrapper: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    fullWidth: {
      flex: 1,
    },
  });

  if (!unorderedListItem && !orderedListItem) {
    return (
      <Text style={[styles.default, style]} {...props}>
        {children}
      </Text>
    );
  }

  const TextWrapper = (
    <View style={styles.textWrapper}>
      <Text style={[styles.default, style]} {...props}>
        {unorderedListItem ? '•' : orderedListItem ? orderedListItem + '.' : ''}
      </Text>
      <Text
        style={[styles.default, styles.fullWidth, style]}
        {...props}>
        {children}
      </Text>
    </View>
  );

  return TextWrapper;
};

export default TextElement;
