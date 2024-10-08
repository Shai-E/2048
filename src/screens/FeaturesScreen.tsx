import React from 'react';
// components
import ScreenContainer from '@reusable/ScreenContainer';
import FeaturesList from '@components/FeaturesList';

const FeaturesScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <FeaturesList />
    </ScreenContainer>
  );
};

export default FeaturesScreen;
