import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// navigators
import TabNavigation from '@navigation/TabNavigation';
import MainNavigation from '@navigation/MainNavigation';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '@services/localization/keys';
// styles
import {useColors} from '@hooks/useColors';
// types
import {RootStackParamList, ScreenNames} from '@appTypes/navigation';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const {t} = useTranslation();
  const colors = useColors();
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackTitle: t(TranslationKeys.back),
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.primaryText,
        }}>
        <RootStack.Screen
          name={ScreenNames.TABS}
          component={TabNavigation}
          options={{title: t(TranslationKeys.tabs), headerShown: false}}
        />
        <RootStack.Screen
          name={ScreenNames.MAIN}
          component={MainNavigation}
          options={{
            title: t(TranslationKeys.main),
            headerShown: true,
            headerTitle: t(TranslationKeys.about),
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
