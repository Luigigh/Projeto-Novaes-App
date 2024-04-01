import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import styles from './Styles';

const FolderItem = ({ folder, onFolderPress }) => {
  return (
    <TouchableOpacity onPress={() => onFolderPress(folder)}>
      <View style={styles.container}>
        <Icon_Entypo name="folder" size={30} color={'#fff'} />
        <View style={styles.right}>
          <Text style={styles.nameFolder}>{folder.name}</Text>
          <Text style={styles.lastModification}>
            Última Modificação: {folder.lastModification}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FolderItem;
