import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnBoarding from './OnBoarding';
import * as Font from 'expo-font';
import {
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  const fonts = {
    inter_semibold: Inter_600SemiBold,
    inter_medium: Inter_500Medium,
    inter_regular: Inter_400Regular,
  };
  const customFonts = useMemo(() => fonts, []);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [customFonts]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <OnBoarding />
    </SafeAreaProvider>
  );
}
