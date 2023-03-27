import React from 'react';
import { ViewProps, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ContainerProps extends ViewProps {
  useSafeArea?: boolean;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  style,
  useSafeArea = true,
}) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View
      style={[
        { flex: 1 },
        useSafeArea && { paddingTop: top, paddingBottom: bottom },
        style,
      ]}>
      {children}
    </View>
  );
};
