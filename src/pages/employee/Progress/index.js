// src/pages/employee/Progress/index.js

import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import Icon_Edit from 'react-native-vector-icons/FontAwesome';
import Icon_Trash from 'react-native-vector-icons/Entypo';
import Icon_Plus from 'react-native-vector-icons/Entypo';
import Icon_Clock from 'react-native-vector-icons/Feather';
import Icon_Date from 'react-native-vector-icons/Fontisto';
import Icon_Check from 'react-native-vector-icons/FontAwesome';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ModalProgress from '../../../components/ModalProgress';
import ModalConfirmacao from '../../../components/ModalStage';
import ProgressService from '../../../service/ProgressService';
import styles from './Styles';

const Progress = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [progressList, setProgressList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [clockButtonIndex, setClockButtonIndex] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataHora, setDataHora] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const progress = await ProgressService.getAllStages();
      setProgressList(progress);
    } catch (error) {
      console.error('Erro ao buscar progressos:', error);
    }
  };

  const handleAddProgress = async () => {
    if (editingIndex !== null) {
      await ProgressService.editStage(progressList[editingIndex].id, { titulo, descricao, dataHora });
      setIsModalVisible(false);
      setEditingIndex(null);
    } else {
      await ProgressService.addStage({ titulo, descricao, dataHora });
      setIsModalVisible(false);
    }
    fetchData();
  };

  const handleClockButtonClick = (index) => {
    setClockButtonIndex(index);
    setConfirmModalVisible(true);
  };

  const handleConfirm = async (confirmed) => {
    if (confirmed) {
      await ProgressService.completeProgress(progressList[clockButtonIndex].id);
      fetchData();
    }
    setConfirmModalVisible(false);
  };

  const handleDeleteProgress = async (index) => {
    await ProgressService.deleteStage(progressList[index].id);
    fetchData();
  };

  return (
    <View style={styles.container}>
      <Header />
      <ModalProgress
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAdd={handleAddProgress}
        isEditing={editingIndex !== null}
        titulo={titulo}
        setTitulo={setTitulo}
        descricao={descricao}
        setDescricao={setDescricao}
        dataHora={dataHora}
        setDataHora={setDataHora}
      />
      <ModalConfirmacao
        visible={confirmModalVisible}
        onConfirm={() => handleConfirm(true)}
        onCancel={() => handleConfirm(false)}
      />

      <FlatList
        style={styles.BoxStage}
        data={progressList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.progressContainer}>
            <TouchableOpacity
              style={[styles.btnClock, { backgroundColor: item.completed ? '#00A148' : '#007B8F' }]}
              onPress={() => handleClockButtonClick(index)}
            >
              {item.completed ? (
                <Icon_Check name="check" size={60} color="white" />
              ) : (
                <Icon_Clock name="clock" size={60} color="#FFF" />
              )}
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.progressContent}>
                <Text style={styles.progressText}>{` ${item.titulo}`}</Text>
                <Text>--------------------------------------------</Text>
                <Text style={styles.progressText}>{` ${item.descricao}`}</Text>
                <Text style={styles.progressText}>
                  {' '}
                  <Icon_Date name="date" size={20} color="#007B8F" />
                  {` ${item.dataHora}`}
                </Text>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.btnEdit}
                  onPress={() => {
                    setIsModalVisible(true);
                    setEditingIndex(index);
                    setTitulo(item.titulo);
                    setDescricao(item.descricao);
                    setDataHora(item.dataHora);
                  }}
                >
                  <Icon_Edit name="pencil" size={25} color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDelete} onPress={() => handleDeleteProgress(index)}>
                  <Icon_Trash name="trash" size={25} color="#FFF" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.addButton}>
        <TouchableOpacity style={styles.btnAdd} title="Adicionar" onPress={() => setIsModalVisible(true)}>
          <Icon_Plus name="plus" size={55} color="#FFF" />
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

export default Progress;
