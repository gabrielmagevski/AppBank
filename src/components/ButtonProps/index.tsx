import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
}

export function ButtonProps({title, ...rest}: ButtonProps) {  
  return(
    <RectButton
      style={styles.button}
      {...rest}
    > 
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}