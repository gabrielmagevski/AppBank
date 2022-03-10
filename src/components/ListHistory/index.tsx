import React from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';

import { styles } from './styles';

import { FontAwesome } from '@expo/vector-icons';

export function ListHistory() {
  const extracts = [
    {id: '1', title: 'Direct Transfer', value: '-R$125.00', name: 'Julian' },
    {id: '2', title: 'Amazon Filmes', value: '-R$55.00', name: 'Online' },
    {id: '3', title: 'Zara Shopping', value: '-R$327.00', name: 'Online' },
    {id: '4', title: 'Zara Shopping', value: '-R$327.00', name: 'Online' },
    {id: '5', title: 'Zara Shopping', value: '-R$327.00', name: 'Online' },
    {id: '6', title: 'Zara Shopping', value: '-R$327.00', name: 'Online' },

  ]
  
  return(
    <View style={styles.backgroundfull}>
      <View style={styles.container}>
        <Text style={styles.primarytitle}>Today</Text>
      
        <FlatList 
          data={extracts} 
          renderItem={({ item }) => (
            <View
            key={item.id}
            >
            <View>
            </View>
              <View style={styles.content}>
                <View style={styles.icon}>
                  <FontAwesome name="shopping-cart" size={24} color="green" />
                </View>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subtitle}>{item.name}</Text>
                </View>
          
                <View style={styles.space}>
                  <Text style={styles.valuetitle}>{item.value}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  )

}