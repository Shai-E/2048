import React from 'react';
import {View, StyleSheet} from 'react-native';
// components
import SwitchElement from '@reusable/SwitchElement';
// redux
import {useAppDispatch, useAppSelector} from '@hooks/reduxHooks';
import {toggleDarkMode} from '@store/reducers/constantsReducer';
import {selectIsDarkMode} from '@store/selectors';
// localization
import {TranslationKeys} from '@services/localization/keys';
import {useTranslation} from 'react-i18next';
import ButtonElement from '@reusable/ButtonElement';
import InputElement from '@reusable/InputElement';
// animation
import LottieView from 'lottie-react-native';
// styles
import {wp} from '@services/dimensions/dimensions';
// form
import {useForm} from 'react-hook-form';

const FeaturesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const {t} = useTranslation();

  const handleDarkModeChange = () => {
    dispatch(toggleDarkMode());
  };

  const {
    control,
    handleSubmit,
    // watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      password: '',
      name: '',
      email: '',
    },
  });

  const onSubmit = (data: any) => {console.log(data)};

  return (
    <View>
      <SwitchElement
        label={t(TranslationKeys.darkMode)}
        cb={handleDarkModeChange}
        initialValue={isDarkMode}
      />
      <ButtonElement
        label={t(TranslationKeys.about)}
        onPress={handleSubmit(onSubmit)}
        buttonSize={'medium'}
      />
      <InputElement
        placeholder={'password'}
        name={'password'}
        secureTextEntry={true}
        control={control}
        error={errors.password}
        rules={{
          required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/
        }}
      />
      <InputElement
        placeholder={'name'}
        name={'name'}
        control={control}
        rules={{
          required: true,
          minLength: 3,
          maxLength: 20,
          pattern: /^[a-zA-Z\s]*$/,
        }}
        error={errors.name}
      />
      <InputElement
        placeholder={'email'}
        name={'email'}
      />
        <View style={styles.lottieContainer}>
          <LottieView
            style={styles.lottie}
            source={require('@assets/animations/forgotPassword.json')}
            autoPlay
            loop
          />
        </View>
        <View style={styles.lottieContainer}>
          <LottieView
            style={styles.lottie}
            source={require('@assets/animations/ripple.json')}
            autoPlay
            loop
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {width: 200, height: 200},
  lottieContainer: {width: wp(100), height: 200, alignItems: 'center'},
});

export default FeaturesList;
