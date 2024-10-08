import {useNavigation} from '@react-navigation/native';
// types
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainStackParamList,
  RootStackParamList,
  ScreenNames,
  TabsParamList,
} from '../types/navigation';

export const useNavigateToTabCB = (tabName: keyof TabsParamList) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToBooks = () => {
    navigation.navigate(ScreenNames.TABS, {screen: tabName});
  };

  return navigateToBooks;
};

export const useNavigateToScreenCB = (tabName: keyof MainStackParamList, params?: any) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToBooks = () => {
    navigation.navigate(ScreenNames.MAIN, {screen: tabName, params: params});
  };

  return navigateToBooks;
};
