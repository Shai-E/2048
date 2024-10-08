import React from 'react';
// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import AboutScreen from '@screens/AboutScreen';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '@services/localization/keys';
// styles
import {useColors} from '@hooks/useColors';
// types
import {ScreenNames} from '@appTypes/navigation';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  const {t} = useTranslation();
  const colors = useColors();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitle: t(TranslationKeys.back),
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.primaryText,
      }}>
      <Stack.Screen
        name={ScreenNames.ABOUT}
        component={AboutScreen}
        options={{
          headerShown: false,
          title: t(TranslationKeys.about),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
