import React from 'react';
// components
import ScreenContainer from '@reusable/ScreenContainer';
import TextElement from '@reusable/TextElement';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '@services/localization/keys';
// styles
import {useColors} from '@hooks/useColors';

const AboutScreen: React.FC = () => {
  const {t} = useTranslation();
  const colors = useColors();

  return (
    <ScreenContainer>
      <TextElement style={{color: colors.primaryText}}>
        {t(TranslationKeys.about)}
      </TextElement>
    </ScreenContainer>
  );
};

export default AboutScreen;
