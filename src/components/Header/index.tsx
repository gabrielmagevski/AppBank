import React from 'react';
import { View, Text, Modal } from 'react-native';

import { Avatar } from '../../components/Avatar';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export function Header() {
  const navigation = useNavigation();

  function handleGoback() {
    navigation.goBack('SignIn')
  }

  return (
    <View style={styles.header}>
      <View style={styles.icon}>
        <AntDesign onPress={handleGoback} name="arrowleft" size={24} color="white" />
        <Text style={styles.headerTitle}>My Cards</Text>
      </View>
      <Avatar onPress={handleGoback} urlImage={'https://github.com/gabrielmagevski.png'} style={styles.image}/>
    </View>
  )
}