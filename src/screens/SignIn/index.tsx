import React from 'react';
import { View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Avatar } from '../../components/Avatar';
import { ButtonProps } from '../../components/ButtonProps';
import { Input } from '../../components/Input';

import { styles } from './styles';

export function SignIn(){
  const navigation = useNavigation();

  const handleAuthenticatedHome = (email: string, password: string) => {
    navigation.navigate('Home',
     { 
      email: [`${email}`],
      password: [`${password}`],
    })

    if(email && password === '') {
      throw new Error('email and password are empty')
    }
    
    console.log(email, password)
  }
  
  return(
    <View style={styles.container}>
      <Avatar
        style={styles.image}
       urlImage={'https://github.com/gabrielmagevski.png'}
      />
      
      <View style={styles.content}>
        <Text style={styles.title}>Welcome again, Gabriel</Text>
        <Text style={styles.subtitle}>
          Please Log into your existing {`\n`}
          account
        </Text>
        <View style={styles.inputsgroups}>
          <Input 
            name="Your Email"
          />
          <Input name="Your Password" />
        </View>
        <View style={styles.content}>
          <ButtonProps
            title="Login" 
            activeOpacity={0.5}
            onPress={() => handleAuthenticatedHome('Testando', 'parametros')}
          />
          <View style={styles.titlesGroups}>
            <Text style={styles.subtitle}>Forgot your password?</Text>
            <Text style={styles.help}>Click Here</Text>
          </View>
        </View>
      </View>
      
    </View>
  )
}