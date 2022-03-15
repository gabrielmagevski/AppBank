import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Avatar } from '../../components/Avatar';

import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { ModalComponent } from '../../components/Modal'
import { ContentModal } from './ContentModal';

export function Header() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  function handleGoback() {
    navigation.goBack('SignIn')
  }

  function handleOpenModal(){

    setModalVisible(!isModalVisible)
  }

  return (
    <View style={styles.header}>

      <View style={styles.icon}>
        <AntDesign onPress={handleGoback} name="arrowleft" size={24} color="white" />
        <Text style={styles.headerTitle}>My Cards</Text>
      </View>

      <TouchableOpacity onPress={handleOpenModal}>
        <Avatar urlImage={'https://github.com/gabrielmagevski.png'} style={styles.image}/>

        <ModalComponent isModalVisible={isModalVisible}>
          <ContentModal />
          <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
            <Text>Fechar Modal</Text>
          </TouchableOpacity>
        </ModalComponent>
        
      </TouchableOpacity>
      
    </View>
  )
}