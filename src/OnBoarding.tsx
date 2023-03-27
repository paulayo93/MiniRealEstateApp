import React from 'react';
import { View, Text } from 'react-native';
import { Container } from './Container';

const OnBoarding = () => {
  return (
    <Container>
      <Text className="mt-8 px-2" style={{ fontFamily: 'inter_regular' }}>
        Onboarding Screen
      </Text>
    </Container>
  );
};

export default OnBoarding;
