import React from 'react';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  
} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
       <Routes />
    </Background>
  );
}