import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export function Informations() {
  const[balance, setBalance] = useState(false);

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {
              balance ? 'Balance' : 'Savings'
            }
          </Text>
          <Text style={styles.subtitle}>
            {
              balance ? '5.032,00' : '2.000,00'
            }
          </Text>
        </View>
        <View style={styles.space}>
          <View style={styles.icons}>
            <FontAwesome name="history" size={20} color="white" />
          </View>
          <TouchableOpacity onPress={() => setBalance(!balance)}>
            <View style={styles.icons}>
              <AntDesign name="swap" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}