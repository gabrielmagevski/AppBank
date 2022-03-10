import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function Informations() {
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Balance</Text>
          <Text style={styles.subtitle}>R$5.032,00</Text>
        </View>
        <View style={styles.space}>
          <View style={styles.icons}>
            <FontAwesome name="history" size={20} color="white" />
          </View>
          <View style={styles.icons}>
            <AntDesign name="swap" size={20} color="white" />
          </View>
        </View>
      </View>
    </View>
  )
}