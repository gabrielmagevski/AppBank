import React from 'react';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList, View, Text } from 'react-native';

export function ListHistory() {
  const extracts = [
    {id: '1', title: 'Direct Transfer', value: '-R$125.00', name: 'Julian' },
    {id: '2', title: 'Amazon Filmes', value: '-R$55.00', name: 'Online' },
    {id: '3', title: 'Spotify Shopping', value: '-R$32.00', name: 'Online' },
    {id: '4', title: 'PlayStore', value: '-R$37.00', name: 'Online' },
    {id: '5', title: 'Google Movies', value: '-R$27.00', name: 'Online' },
    {id: '6', title: 'Zara Shopping', value: '-R$3267.00', name: 'Online' },
    {id: '7', title: 'Food truck', value: '-R$3267.00', name: 'Online' },
  ];
  
  const renderItem = ({ item }) => (
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
  );

  const labelHeader = <Text style={styles.primarytitle}>Today</Text>;

  return(    
    <View style={styles.backgroundfull}>
      <View style={styles.container}>
        <FlatList
          data={extracts}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListHeaderComponent={labelHeader}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
};