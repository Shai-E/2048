import React, {memo} from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '@services/localization/keys.ts';
// animations
import Animated, {ZoomIn, ZoomOut} from 'react-native-reanimated';
// styles
import SearchIcon from '@src/assets/icons/Search';
import ClearIcon from '@src/assets/icons/Clear';
import {useColors} from '@hooks/useColors.ts';
import {hp} from '@services/dimensions/dimensions.ts';

type SearchBarProps = {
  searchKey: string;
  setSearchKey: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({searchKey, setSearchKey}) => {
  const {t} = useTranslation();
  const colors = useColors();
  const dynamicStyles = () => ({
    color: searchKey.length > 0 ? colors.active : colors.placeholder,
    marginHorizontal: 10,
  });

  const onSeachKeyChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => setSearchKey(e.nativeEvent.text);

  const clearSearchKey = () => setSearchKey('');

  return (
    <View style={styles.searchBarContainer}>
      <View
        style={[
          styles.searchInputContainer,
          {backgroundColor: colors.oppositeBg},
        ]}>
        <SearchIcon style={dynamicStyles()} />
        <TextInput
          placeholderTextColor={colors.placeholder}
          placeholder={t(TranslationKeys.searchPlaceholder)}
          style={[
            styles.searchInput,
            {borderColor: colors.border, color: colors.placeholder},
          ]}
          onChange={onSeachKeyChange}
          value={searchKey}
        />
        {searchKey.length > 0 && (
          <Animated.View entering={ZoomIn} exiting={ZoomOut}>
            <TouchableOpacity
              onPress={clearSearchKey}
              hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
              <ClearIcon style={styles.icon} />
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    height: hp('7%'),
    justifyContent: 'flex-end',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp('6%'),
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    borderEndEndRadius: 10,
    paddingHorizontal: 10,
    borderStartWidth: 1,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default memo(SearchBar);
