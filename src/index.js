import { registerRootComponent } from 'expo';
import React, { useState, useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { STORE } from './store';
import { FONT_ASSETS } from './fonts';
import { StatusBar } from 'expo-status-bar';
import { AppConnected } from './components/app/app.connected';
import * as NavigationBar from 'expo-navigation-bar';
import { isAndroid } from './utils/is-android/is-android';

// Makes the native splash screen remain visible until hideAsync is called.
SplashScreen.preventAutoHideAsync();

// Hides the Android Navigation Bar
if (isAndroid()) {
  NavigationBar.setVisibilityAsync('hidden');
  NavigationBar.setBehaviorAsync('inset-touch');
}

// eslint-disable-next-line import/no-unused-modules
export function Main() {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function loadAssets() {
      // Load any fonts, images, assets, and/or make any asynchronous requests
      // before the Splash Screen is hidden
      await Font.loadAsync(FONT_ASSETS);
      setAppReady(true);
    }

    loadAssets();
  }, []);

  const onLayout = useCallback(async () => {
    if (appReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) return null;

  return (
    <Provider store={STORE}>
      <StatusBar hidden />
      <AppConnected onLayout={onLayout} />
    </Provider>
  );
}

registerRootComponent(Main);
