import { View ,Text } from "react-native";
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Awesome from 'react-native-vector-icons/FontAwesome';
import styles from "./Styles";

export default function FolderItem({nameFolder, lastModification}) {
    return(
        <View style={styles.container}>
            <View style={styles.right}>
                <Icon_Awesome name='paste' size={30} color={'#FFF'} />
                <View style={styles.InformationPaste}>
                    <Text style={styles.nameFolder}>{nameFolder}</Text>
                    <Text style={styles.lastModification}>Ultima Modificação: {lastModification}</Text>
                </View>
            </View>
            <Icon_Entypo name="dots-three-vertical" size={30} color={'#FFF'}/>
        </View>
    )
}