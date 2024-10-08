import React from 'react';
// navigation
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screens
import WelcomeScreen from '@screens/WelcomeScreen';
import FeaturesScreen from '@screens/FeaturesScreen';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '@services/localization/keys';
// styles
import BookmarkIcon from '@src/assets/icons/Bookmark';
import BookIcon, {CustomSvgProps} from '@src/assets/icons/Book';
import {useColors} from '@hooks/useColors';
import {defaultFont, defaultHeaderTitleAlign} from '@fixtures/defaults';
// types
import {ScreenNames, TabsParamList} from '@appTypes/navigation';
import {ColorTheme} from '@assets/colors/colors';

const TabIcon = ({
  focused,
  colors,
  Icon,
}: {
  focused: boolean;
  colors: ColorTheme;
  Icon: React.FC<CustomSvgProps>;
}) => (
  <Icon
    width={20}
    height={20}
    color={focused ? colors.primaryText : colors.placeholder}
  />
);
const Tab = createBottomTabNavigator<TabsParamList>();

const TabNavigation = () => {
  const {t} = useTranslation();
  const colors = useColors();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: defaultFont.familiy,
        },
        tabBarActiveTintColor: colors.primaryText,
        tabBarInactiveTintColor: colors.placeholder,
      }}>
      <Tab.Screen
        name={ScreenNames.WELCOME}
        component={WelcomeScreen}
        options={{
          title: t(TranslationKeys.welcome),
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.primaryText,
          headerTitleAlign: defaultHeaderTitleAlign,
          headerTitle: t(TranslationKeys.welcome),
          tabBarIcon: ({focused}) => TabIcon({focused, colors, Icon: BookIcon}),
        }}
      />
      <Tab.Screen
        name={ScreenNames.FEATURES}
        component={FeaturesScreen}
        options={{
          title: t(TranslationKeys.features),
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.primaryText,
          headerTitleAlign: defaultHeaderTitleAlign,
          headerTitle: t(TranslationKeys.features),
          tabBarIcon: ({focused}) =>
            TabIcon({focused, colors, Icon: BookmarkIcon}),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
