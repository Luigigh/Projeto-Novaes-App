import { View, Text, Pressable } from "react-native";
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Awesome from 'react-native-vector-icons/FontAwesome';
import Icon_Edit from 'react-native-vector-icons/FontAwesome';
import Icon_Trash from 'react-native-vector-icons/Entypo';
import styles from "./Styles";
import colors from "../../color";

export default function FolderItem({ nameFolder, lastModification }) {
    return (

        <View style={styles.container}>

            <View style={styles.right}>
                <Icon_Awesome name='paste' size={30} color={'#FFF'} />
                <View style={styles.InformationPaste}>
                    <Text style={styles.nameFolder}>{nameFolder}</Text>
                    <Text style={styles.lastModification}>Ultima Modificação: {lastModification}</Text>
                </View>
            </View>

            <MenuProvider style={styles.MenuProviderContainer}>
                <Menu style={styles.Menu}>
                    <MenuTrigger >
                        <View style={styles.viewTriggerContainer}>
                            <Icon_Entypo name="dots-three-vertical" size={30} color={'#FFF'} />
                        </View>
                    </MenuTrigger>
                    <MenuOptions style={styles.containerMenuOptions}>
                        <MenuOption style={styles.Options} onSelect={() => console.log('Editar Diretório')}>
                            <Text>Editar</Text><Icon_Edit name="pencil" size={25} color={colors.verde}/>
                            <Text>Excluir</Text><Icon_Trash name="trash" size={25} color={colors.laranja} onSelect={() => console.log('Excluir Diretório')} />
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </MenuProvider>


        </View>
    )
}