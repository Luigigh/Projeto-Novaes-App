import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { LinearGradient } from "expo-linear-gradient";
import styles from './Styles';

const ModalRegsFuncionario = ({ visible, onClose, onAdd, isEditing }) => {
    const [email, setEmail] = React.useState('');
    const [cargo, setCargo] = React.useState('');

    const handleAddProgress = () => {

        onAdd({ email, cargo });
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

                    <Text style={styles.title}>{isEditing ? 'Editar Etapa' : 'Cadastrar Funcionário'}</Text>
                    <TextInput
                        style={styles.inputEmail}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        maxLength={20}
                        placeholderTextColor={'#6B6D71'}
                        fontSize={15}
                    />
                    <View style={styles.cargoPicker}>
                        <RNPickerSelect
                            onValueChange={(value) => console.log(value)}
                            items={[
                                { label: 'Administrativo', value: 'adm' },
                                { label: 'Gestor', value: 'gestor' },
                                { label: 'Engenharia', value: 'eng' },
                            ]}
                            placeholder={{ label: 'Selecione um Cargo:', value: null }}

                        />
                    </View>


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

export default ModalRegsFuncionario;
