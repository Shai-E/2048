import React, {useEffect} from 'react';
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Platform,
} from 'react-native';
// redux
import {useAppSelector} from '@hooks/reduxHooks';
import {selectIsDarkMode} from '@store/selectors';
// Components
import StatusBarElement from '@reusable/StatusBarElement';
// styles
import {useColors} from '@hooks/useColors';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

type BarStyle = 'light-content' | 'dark-content';

type ScreenContainerProps = {
  children: React.ReactNode;
  backgroundColor?: string;
  statusBarColor?: string;
  isScrollable?: boolean;
  statusBarStyle?: BarStyle;
};

const ScreenContainer = ({
  children,
  isScrollable,
  backgroundColor,
  statusBarColor,
  statusBarStyle,
}: ScreenContainerProps): React.JSX.Element => {
  const colors = useColors();
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const DynamicView = isScrollable ? View : SafeAreaView;
  
  const handleChangeNavigationBarColor = async () => {
    try {
      changeNavigationBarColor(colors.primary);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    Platform.OS === 'android' && handleChangeNavigationBarColor();
  }, [isDarkMode]);

  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <DynamicView
        style={[
          styles.container,
          {backgroundColor: backgroundColor || colors.primary},
        ]}>
        <StatusBarElement
          barStyle={
            statusBarStyle || (isDarkMode ? 'light-content' : 'dark-content')
          }
          backgroundColor={statusBarColor || colors.primary}
        />
        {children}
      </DynamicView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenContainer;
