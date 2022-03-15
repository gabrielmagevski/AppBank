import React from 'react';
import { View, Text} from 'react-native';

import { Avatar } from '../../Avatar';

import { styles } from './styles';

export function ContentModal(){
  return(
    <View style={styles.container}>
    <Avatar urlImage={'https://github.com/gabrielmagevski.png'} style={styles.image} />

    <View style={styles.group}>
      <View style={styles.content}>
        <Text style={styles.title}>Seus dados</Text>
        <Text style={styles.informations}>Banco 170 - Go Bank S.A.</Text>
        <Text style={styles.informations}>Agência 0001</Text>
        <Text style={styles.informations}>Conta 1467023-9</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Investimentos</Text>
        <Text style={styles.subtitle}>R$30.023,00</Text>
      </View>
    </View>
  </View>

  )
}