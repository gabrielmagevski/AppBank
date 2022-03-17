import React from 'react';
import { Image, ScrollView } from 'react-native';

import CartBank from '../../assets/bank.png';
import CartBankCredit from '../../assets/bankCredit.png';


import { styles } from './styles';

export function CartsBank() {
  return(
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 70, paddingLeft: 20 }}
      style={styles.container}
    >
      <Image source={CartBank} />
      <Image source={CartBankCredit} />
    </ScrollView>
  )
}