// No componente FolderItem
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Edit from 'react-native-vector-icons/FontAwesome';
import Icon_Trash from 'react-native-vector-icons/Entypo';
import styles from './Styles';
import * as ContractService from '../../service/ContractService';

const FolderItem = ({ folder, onDelete, onView }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const handleDelete = async () => {
    try {
      await ContractService.deleteFolder(folder.name);
      onDelete(folder.name);
    } catch (error) {
      console.error('Erro ao deletar pasta:', error);
    }
  };

  const handleViewFolder = () => {
    if (folder.type === "directory") {
      onView(folder);
    }
  };

  return (
    <View style={styles.container}>
      <Icon_Entypo name="folder" size={30} color={'#fff'} />
      <View style={styles.right}>
        <View style={styles.InformationPaste}>
          <TouchableOpacity onPress={toggleContent} style={{backgroundColor: 'green'}}>
            <Text style={styles.nameFolder}>{folder.name}</Text>
          </TouchableOpacity>
          <Text style={styles.lastModification}>
            Última Modificação: {folder.lastModification}
          </Text>
          {showContent && folder.type === "directory" && (
            <View style={styles.contentContainer}>
              {/* Renderizar cada subpasta recursivamente */}
              {folder.content.map(item => (
                <FolderItem
                  key={item.name}
                  folder={item}
                  onDelete={onDelete}
                  onView={onView}
                />
              ))}
            </View>
          )}
         
        </View>
        <TouchableOpacity onPress={toggleOptions} style={styles.btnOptions}>
            <Icon_Entypo name="dots-three-vertical" size={30} color={'#fff'} />
          </TouchableOpacity>
        {showOptions && (
          <View style={styles.optionContainer}>
            {/* Botão para deletar */}
            <TouchableOpacity onPress={handleDelete} style={styles.option}>
              <Icon_Trash name="trash" size={20} color={'#000'} />
              <Text style={styles.optionText}>Deletar</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default FolderItem;
