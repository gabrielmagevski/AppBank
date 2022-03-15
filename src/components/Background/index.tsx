import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../styles/theme';

import { styles } from './styles';

type BackgroundProps = {
  children: ReactNode;
}


export function Background({ children }: BackgroundProps) {
  const { primaryBlueBackground, secondaryBlueBackground } = theme.colors
  
  return( 
    <LinearGradient
      colors={[
        primaryBlueBackground,
        secondaryBlueBackground,
        primaryBlueBackground,
      ]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  )
}