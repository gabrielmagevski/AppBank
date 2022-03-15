import React from 'react';
import { View, Image } from 'react-native';
import { Header } from '../../components/Header';

import CartBank from '../../assets/bank.png';
  
import { styles } from './styles';
import { Informations } from '../../components/Informations';
import { ListHistory } from '../../components/ListHistory';
import { ModalComponent } from '../../components/Modal';

export function Home() {
  return( 
    <View style={styles.container}>
      <Header />
      <View>
          <Image source={CartBank} />
      </View>
      <View>
        <Informations />
      </View>
      <View>
        <ListHistory /> 
      </View>
    </View>
  )
}