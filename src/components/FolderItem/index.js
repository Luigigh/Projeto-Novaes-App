import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const FolderItem = ({ folder, onFolderPress }) => {
  return (
    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, elevation: 5 }}>
      <TouchableOpacity onPress={() => onFolderPress(folder)}>
        <Text>{folder.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FolderItem;
