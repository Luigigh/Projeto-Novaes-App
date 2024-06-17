import axios from "axios";
import { id } from "date-fns/locale";
import * as FileSystem from 'expo-file-system';
const url = process.env.EXPO_PUBLIC_API_URL;

const fetchDirectories = async (parentDirectoryId) => {
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

const getNameOfDirectoryById = async(id_directory) => {
  console.log("id sendo recebido na requisiçao: "+id_directory);
  try{
    const response = await axios.get(`${url}/archive/directory/getNameOfDirectoryById/${id_directory}`);
    console.log(response.data);
    return response.data
    
  }catch ( error ){
    console.log(JSON.stringify(error))
  }
}

const fetchDirectoriesClient = async (parentDirectoryId) => {
  try {
    const response = await axios.get(`${url}/archive/directory/${parentDirectoryId}`);
    
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

const getDirectoryNames = async () => {
  try {
      const response = await axios.get(`${url}/archive/directory/getNameDirectoryInRoot`);
      if (!response.status == 200) {
          console.log("Erro na requisição")
      }
      return response.data;
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
  }
};




const fetchFiles = async (id_directory) => {
  console.log(id_directory);
  try {
    const response = await axios.get(`${url}/archive/getArchiveOfDirectory/${id_directory}`);
    console.log(id_directory);
    if (response.data) {
      return response.data;
    } else {
      console.log("Nenhum arquivo encontrado na resposta da API.");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar arquivos requisição:", error);
    return [];
  }
};

addFile = async () => {

}



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

async function uploadFile(file, directoryID) {
  try {
    const formdata = new FormData();
    formdata.append("contentArchive", {
      uri: file.assets[0].uri,
      name: file.assets[0].name,
      type: file.assets[0].mimeType
    });
    formdata.append("name", file.assets[0].name);
    formdata.append("directoryID", directoryID);
    formdata.append("type", file.assets[0].mimeType); 

    const response = fetch(`${url}/archive`, {
      method: 'POST',
      body: formdata
    });
  } catch (error) {
    console.error('Erro durante o upload do arquivo:', error);
  }
}






const deleteFolder = async (folderId) => {
  try {
    const response = await axios.delete(`${url}/archive/directory/${folderId}`);
    console.log("Pasta excluída com sucesso");
    return response.data;
  } catch (error) {
    console.error("Erro ao excluir pasta:", error);
    
  }
};

const deleteFile = async (fileId) => {
  try{
    const response = await axios.delete(`${url}/archive/${fileId}`);
    console.log("response delete file: "+JSON.stringify(response));
    if(response.status == 200){
      return true;
    }else{
      return false;
    }
  } catch ( error ){
    console.log("Erro: "+ error);
  }
}

const updateFolder = async (folderId, folderName) => {
  try {
    const response = await axios.put(`${url}/archive/directory/${folderId}`, { name: folderName });
    console.log("Pasta editada com sucesso");
    return response.data;
  } catch (error) {
    console.error("Erro ao editar pasta:", error);
    throw error;
  }
};

export default {fetchFiles, fetchDirectories, addFolder, deleteFolder, updateFolder , uploadFile , fetchDirectoriesClient , getDirectoryNames , getNameOfDirectoryById , deleteFile};
