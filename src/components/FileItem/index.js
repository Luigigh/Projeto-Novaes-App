import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Awesome from 'react-native-vector-icons/FontAwesome';
import styles from "./Style";

export default function FileItem({ file }) {
    const [extension, setExtension] = useState('');

    useEffect(() => {
        
    });

    

    const handleFilePress = () => {
        openFile(file);
    };

    const renderFileItem = ({ item }) => (
        <TouchableOpacity style={styles.fileItemContainer} onPress={() => onFilePress(item)}>
          <Text style={styles.fileItemText}>{item.name}</Text>
        </TouchableOpacity>
      );

    return (
        <View style={styles.container}>
            <View style={styles.right}>
                <Icon_Awesome name={extension} size={30} color={'#000'} />
                <View style={styles.InformationFile}>
                    <Text style={styles.nameFile}>{file.name}</Text>
                    <Text style={styles.lastModification}>Última Modificação: {file.lastModification}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleFilePress}>
                <Icon_Entypo name="dots-three-vertical" size={30} color={'#000'} />
            </TouchableOpacity>
        </View>
    )
}
