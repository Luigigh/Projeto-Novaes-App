import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon_Entypo from "react-native-vector-icons/Entypo";
import Icon_File from "react-native-vector-icons/Feather";
import styles from "./Style";

export default function FileItem({ file, onFilePress }) {

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Icon_File name="file" size={35} color={"grey"} />
  
          <TouchableOpacity
            style={styles.ButtonName}
            onPress={() => onFilePress(file)}
          >
            <Text style={styles.Text}>{file.name}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity >
          <Icon_Entypo name="dots-three-vertical" size={30} color={"#000"} />
        </TouchableOpacity>
      </View>
    );
}
