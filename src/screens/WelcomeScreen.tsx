import React from 'react';
import {ScrollView} from 'react-native';
// components
import ScreenContainer from '@reusable/ScreenContainer';
import TextElement from '@components/reusable/TextElement';
import TemplateDescription from '@components/TemplateDescription';
import SeparatorElement from '@reusable/SeparatorElement';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '@services/localization/keys';
// hooks
import {useNavigateToScreenCB} from '@hooks/navigationHooks';
// styles
import {useColors} from '@hooks/useColors';
// types
import {ScreenNames} from '@appTypes/navigation';

const WelcomeScreen: React.FC = () => {
  const colors = useColors();
  const {t} = useTranslation();
  const handleNavigateToAbout = useNavigateToScreenCB(ScreenNames.ABOUT);

  return (
    <ScreenContainer>
      <ScrollView>
        <TextElement
          style={{color: colors.primaryText}}
          fontSize={'xxl'}
          gap={15}>
          {t(TranslationKeys.welcome)}
        </TextElement>
        <SeparatorElement />
        <TemplateDescription />
        <SeparatorElement />
        <TextElement link={colors.active} gap={15} onPress={handleNavigateToAbout}>
          {t(TranslationKeys.about)}
        </TextElement>
      </ScrollView>
    </ScreenContainer>
  );
};

export default WelcomeScreen;
