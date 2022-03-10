import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../../components/Avatar';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.headerTitle}>My Cards</Text>
      </View>
      <Avatar urlImage={'https://github.com/gabrielmagevski.png'} style={styles.image}/>
    </View>
  )
}