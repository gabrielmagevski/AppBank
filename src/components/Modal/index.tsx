import React, { ReactNode, useState } from "react";
import { Button, Text, View, TouchableOpacity} from "react-native";

import Modal from "react-native-modal";

import { Avatar } from "../Avatar";
import { ButtonProps } from "../ButtonProps";
import { styles } from "./styles";

type PropsModal = {
  children: ReactNode;
  isModalVisible: boolean;
}

export function ModalComponent({ isModalVisible, children }: PropsModal) {
  return (
    <View style={styles.container}>

      <Modal style={styles.modal}
       isVisible={isModalVisible}
       animationIn="slideInUp"
       animationOutTiming={1200}  
       animationInTiming={600}
       backdropTransitionInTiming={600}
       backdropTransitionOutTiming={1200}
      >
      { children }
      </Modal>
    </View>
  );
}