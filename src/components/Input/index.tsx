import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { theme } from '../../styles/theme';

import { styles } from './styles';

type InputProps = TextInputProps & {
  name: string;
}

export function Input({ name, ...rest }: InputProps) {
  const { white } = theme.colors

  return(
    <TextInput 
      style={styles.input}
      placeholder={name}
      placeholderTextColor={white}
      {...rest}
    />
  )
}