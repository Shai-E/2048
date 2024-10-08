import {NavigatorScreenParams} from '@react-navigation/native';

export enum ScreenNames {
  FEATURES = 'features',
  WELCOME = 'welcome',
  ABOUT = 'about',
  TABS = 'tabs',
  MAIN = 'main',
}

export type RootStackParamList = {
  [ScreenNames.TABS]: NavigatorScreenParams<TabsParamList>;
  [ScreenNames.MAIN]: {
    screen: keyof MainStackParamList;
    params: MainStackParamList[keyof MainStackParamList];
  };
};

export type TabsParamList = {
  [ScreenNames.FEATURES]: undefined;
  [ScreenNames.WELCOME]: undefined;
};

export type MainStackParamList = {
  [ScreenNames.ABOUT]: undefined;
};
