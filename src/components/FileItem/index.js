import react,{useState , useEffect} from "react";
import { View ,Text } from "react-native";
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Awesome from 'react-native-vector-icons/FontAwesome';
import styles from "./Style";




export default function FileItem({fileName, lastModification, extensionFile}) {
    const [extension , setExtention] = useState('');


    useEffect(() => {
        verifyTypeFile(extensionFile);
    },[extensionFile])

    const verifyTypeFile = (typeFile)=> {
        switch (typeFile) {
            case "pdf":
               setExtention('file-pdf-o');
              break;
            case "jpg":
            case "png":
            case "jfif":
              setExtention('image');
              break;
            default:
              console.log("Extensão de arquivo não reconhecida.");
          }
          
    }
    return(
        <View style={styles.container}>
            <View style={styles.right}>
                <Icon_Awesome name={extension} size={30} color={'#000'} />
                <View style={styles.InformationFile}>
                    <Text style={styles.nameFile}>{fileName}</Text>
                    <Text style={styles.lastModification}>Ultima Modificação: {lastModification}</Text>
                </View>
            </View>
            <Icon_Entypo name="dots-three-vertical" size={30} color={'#000'}/>
        </View>
    )
}