import React from 'react';
import { View, Image } from 'react-native';
import { Header } from '../../components/Header';
  
import { styles } from './styles';
import { Informations } from '../../components/Informations';
import { ListHistory } from '../../components/ListHistory';
import { CartsBank } from '../../components/CartsBank';

export function Home() {
  return( 
    <View style={styles.container}>
      <Header />
        <CartsBank />
        <Informations />
      <View style={{flex: 1}}>
        <ListHistory /> 
      </View>
    </View>
  )
}