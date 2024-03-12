import React, { useEffect , useState} from "react";
import { View, TouchableOpacity } from "react-native";
import Icon_Contacts from 'react-native-vector-icons/MaterialIcons';
import Icon_Home from 'react-native-vector-icons/Entypo';
import Icon_Timeline from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";


export default function Footer({routeSelected}) {
const [ifHomeSelected, setIfHomeSelected] = useState(false);
const [ifContactSelected, setIfContactSelected] = useState(false);
const [ifTimelineSelected, setIfTimelineSelected] = useState(false);

const navigator = useNavigation();

    useEffect(()=> {
    console.log("Route relected: "+routeSelected)
    if(routeSelected ==='ContractList'){
        setIfHomeSelected(true);
    }
    if(routeSelected === 'InfoManager'){
        setIfContactSelected(true);
    }
    if(routeSelected === 'Timeline'){
        setIfTimelineSelected(true);
    }
    },[routeSelected]);


    return (
    <View style={styles.container}>
        <TouchableOpacity 
            style={ifContactSelected ? styles.btnSelected : styles.btnNotSelected}
            onPress={() => {navigator.navigate('InfoManager')}}
            >
                <Icon_Contacts name='contacts' size={35} color={'#fff'}/>
        </TouchableOpacity>

        <TouchableOpacity 
            style={ifHomeSelected ? styles.btnSelected : styles.btnNotSelected}
            onPress={() => {navigator.navigate('ContractList')}}
            >
                <Icon_Home name='home' size={35} color={'#fff'}/>
        </TouchableOpacity>

        <TouchableOpacity 
            style={ifTimelineSelected ? styles.btnSelected : styles.btnNotSelected}
            onPress={() => {navigator.navigate('TimeLine')}}
            >
                <Icon_Timeline name='timeline-clock' size={35} color={'#fff'}/>
        </TouchableOpacity>
    </View>
    )
}
