import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity, FlatList } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { listarEtapas } from '../../../service/ProgressServiceClient'; 
import Icon_Date from 'react-native-vector-icons/Fontisto';
import Icon_Clock from 'react-native-vector-icons/Feather';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProgressServiceClient from '../../../service/ProgressServiceClient';
import styles from './Styles';

const ProgressClient = () => {
   progressList
    const [progressList, setProgressList] = useState([]);

    const route = useRoute();


    useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        try {
          const progress = await ProgressServiceClient.getAll();
          console.log("Dados das etapas:", progress);
          setProgressList(progress);
        } catch (error) {
          console.error("Erro ao buscar progressos:", error);
        }
      };
    return (
        <View style={styles.container}>
            <Header/>
            <FlatList
        style={styles.BoxStage}
        data={progressList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.progressContainer}>
            <TouchableOpacity
              style={[
                styles.btnClock,
                { backgroundColor: item.completed ? "#00A148" : "#007B8F" },
              ]}
            >
              {item.completed ? (
                <Icon_Check name="check" size={60} color="white" />
              ) : (
                <Icon_Clock name="clock" size={60} color="#FFF" />
              )}
            </TouchableOpacity>
            <View style={styles.content}>
              <View style={styles.progressContent}>
                <Text style={styles.progressText}>{` ${item.title}`}</Text>
                <Text>--------------------------------------------</Text>
                <Text
                  style={styles.progressText}
                >{` ${item.description}`}</Text>
                <Text style={styles.progressText}>
                  {" "}
                  <Icon_Date name="date" size={20} color="#007B8F" />
                  {` ${item.dateHour}`}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
            <Footer routeSelected={route.name}/>
        </View>
    );
};

export default ProgressClient;
