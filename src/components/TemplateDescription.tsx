import React from 'react';
import {StyleSheet, View} from 'react-native';
// components
import TextElement from '@reusable/TextElement';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '@services/localization/keys';
// styles
import {useColors} from '@hooks/useColors';

const TemplateDescription: React.FC = () => {
  const {t} = useTranslation();
  const colors = useColors();

  const features = [
    TranslationKeys.feature1,
    TranslationKeys.feature2,
    TranslationKeys.feature3,
    TranslationKeys.feature4,
    TranslationKeys.feature5,
    TranslationKeys.feature6,
    TranslationKeys.feature7,
    TranslationKeys.feature8,
  ];

  return (
    <View style={styles.container}>
      <TextElement style={{color: colors.primaryText}}>
        {t(TranslationKeys.abstractDescription)}
      </TextElement>
      <TextElement style={{color: colors.primaryText}} bold gap={10}>
        {t(TranslationKeys.includedFeatures)}
      </TextElement>
      {features.map((feature, index) => (
        <TextElement
          key={index}
          style={{color: colors.primaryText}}
          unorderedListItem
          gap={3}>
          {t(feature)}
        </TextElement>
      ))}
      <TextElement style={{color: colors.primaryText}}>
        {t(TranslationKeys.descriptionSummary)}
      </TextElement>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
    },
});

export default TemplateDescription;
