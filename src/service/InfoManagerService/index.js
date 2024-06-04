import axios from "axios";
import { Alert } from "react-native";

let ImageList = [];
const url = process.env.EXPO_PUBLIC_API_URL;

export async function AddImageForProfile(uriImage) {
  let image = {
    id: generateRandomId(),
    imageURI: uriImage,
  };
  ImageList.push(image);
}

export async function FindImageProfile(uriImage) {
  for (let i = 0; i < ImageList.length; i++) {
    if (ImageList[i].imageURI === uriImage) {
      return ImageList[i];
    }
  }
  return null;
}

function generateRandomId() {
  return Math.random().toString(36).substr(2, 4);
}

const saveImage = async (userData) => {
  try {
    const response = await axios.post(
      `${url}/employee/addProfilePhoto/`,
      userData
    );
    return response.data;
  } catch (error) {
    alert("Erro ao salvar a imagem:", error);
    throw error;
  }
};

export async function getClientById(id) {
  try {
    const response = await axios.get(`${url}/employee/${id}`);

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar funcionario:", error);
    throw error;
  }
}

export const saveProfilePhoto = async (photo, id) => {
  try {
    let formData = new FormData();
    formData.append('profilePhoto', {
      uri: photo,
      name: 'profile.jpg',
      type: 'image/jpeg',
    });

    const response = await axios.put(`${url}/employee/addProfilePhoto/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao salvar a foto de perfil:', error);
    throw error;
  }
};

export const updateEmployee = async (userId, data) => {
  try {
    console.log("Enviando dados para atualização:", data);
    const response = await axios.put(`${url}/employee/${userId}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("Resposta:", response.data);
    if(response) {
      Alert.alert(
        "Alteração feita!",
        "Caso não seja alterado em imediato, saia e entre novamente no aplicativo.",
        [
          {
            text: "Fechar",
            style: "cancel",
          },
        ]
      );
    }
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar os dados do funcionário:", error.response?.data || error.message);
    return null;
  }
};
