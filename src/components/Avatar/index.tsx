import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

type PropsImage = {
  urlImage: string;
  style: Object;
}

export function Avatar({ urlImage, ...rest}: PropsImage) {
  return(
    <View style={styles.container}>
      <Image 
        source={{ uri: urlImage}}
        {...rest}
      />
    </View>
  )
}