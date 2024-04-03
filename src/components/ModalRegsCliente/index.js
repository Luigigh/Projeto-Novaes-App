import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './Styles';
import { LinearGradient } from 'expo-linear-gradient';

const ModalRegsCliente = ({ visible, onClose, onAdd, isEditing }) => {
    const [email, setEmail] = React.useState('');
    const [nomeEmpresa, setnomeEmpresa] = React.useState('');

    const handleAddProgress = () => {

        onAdd({ email, nomeEmpresa });
    };

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
        >
            <View style={styles.modalContainer}>

                <LinearGradient
                    style={styles.linear}
                    colors={["#B3DFE7", "white"]}
                >

                    <Text style={styles.title}>{isEditing ? 'Editar Etapa' : 'Cadastrar Cliente'}</Text>
                    <TextInput
                        style={styles.inputEmail}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        maxLength={20}
                        placeholderTextColor={'#6B6D71'}
                        fontSize={15}
                    />

                    <TextInput
                        style={styles.inputEmail}
                        placeholder="Nome Da Empresa"
                        value={nomeEmpresa}
                        onChangeText={setnomeEmpresa}
                        maxLength={30}
                        placeholderTextColor={'#6B6D71'}
                        fontSize={15}
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.btnAdd}
                            onPress={handleAddProgress}
                        >
                            <Text style={{ color: 'white', fontSize: 18 }}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnCancel}
                            onPress={onClose}
                        >
                            <Text style={{ color: 'white', fontSize: 16.5 }}>Voltar</Text>
                        </TouchableOpacity>

                    </View>

                </LinearGradient>

            </View>

        </Modal>
    );
};

export default ModalRegsCliente;
