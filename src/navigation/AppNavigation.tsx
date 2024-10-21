import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '@services/localization/keys';
// styles
import {useColors} from '@hooks/useColors';
// types
import {RootStackParamList, ScreenNames} from '@appTypes/navigation';
import Game2048 from '@src/screens/Game2048';

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
          component={Game2048}
          options={{title: t(TranslationKeys.tabs), headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
