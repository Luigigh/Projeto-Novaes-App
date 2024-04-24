import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './Styles';

const FolderItem = ({ folder, onFolderPress }) => {
  const renderFileItem = ({ item }) => (
    <TouchableOpacity style={styles.fileItemContainer} onPress={() => onFilePress(item)}>
      <Text style={styles.fileItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.ButtonName} onPress={() => onFolderPress(folder)}>
        <Text style={styles.Text}>{folder.name}</Text>
      </TouchableOpacity>
      <FlatList
        data={folder.listArchives}
        renderItem={renderFileItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default FolderItem;
