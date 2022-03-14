import React, { useState } from "react";
import { Button, Text, View, TouchableOpacity} from "react-native";

import Modal from "react-native-modal";

import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function ModalComponent() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal style={styles.modal}
       isVisible={isModalVisible}
       animationIn="slideInUp"
       animationOutTiming={1200}  
       animationInTiming={600}
      >
        <View style={styles.container}>
          <Avatar urlImage={'https://github.com/gabrielmagevski.png'} style={styles.image} />

          <View style={styles.group}>
            <View style={styles.content}>
              <Text style={styles.title}>Seus dados</Text>
              <Text style={styles.informations}>Banco 170 - Go Bank S.A.</Text>
              <Text style={styles.informations}>Agência 0001</Text>
              <Text style={styles.informations}>Conta 1467023-9</Text>
            </View>

            <View style={styles.content}>
              <Text style={styles.title}>Investimentos</Text>
              <Text style={styles.subtitle}>R$30.023,00</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.button} onPress={toggleModal}>
              <Text>
                fechar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}