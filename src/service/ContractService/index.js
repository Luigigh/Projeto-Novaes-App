import axios from "axios";
const url = process.env.EXPO_PUBLIC_API_URL;

const fetchDirectories = async (parentDirectoryId = null) => {
  try {
    const response = await axios.get(`${url}/archive/directory`, {
      params: {
        parentDirectoryId: parentDirectoryId
      }
    });
    
    if (response.data) {
      return response.data;
    } else {
      console.log("Nenhuma pasta encontrada na resposta da API.");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar diretórios:", error);
    return [];
  }
};

const fetchFiles = async () => {
  try {
    const response = await axios.get(`${url}/archive`);
    console.log(JSON.stringify(response.data));
    if (response.data) {
      return response.data;
    } else {
      console.log("Nenhum arquivo encontrado na resposta da API.");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar arquivos:", error);
    return [];
  }
};

const addFolder = async (folderName, parentDirectoryId) => {
  try {    
    if (parentDirectoryId >= 1) {
      const response = await axios.post(`${url}/archive/directory`, {
        name: folderName,
        parentDirectory: {
          id: parentDirectoryId
        }
      });
      console.log("RESPOSTA CONSOLE", JSON.stringify(response)); 
      return response.data;
    }
  } catch (error) {
    console.error('Erro ao adicionar pasta:', error);
    throw error;
  }
};


export default {fetchFiles, fetchDirectories, addFolder };