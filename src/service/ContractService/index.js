import axios from 'axios';
const url = process.env.EXPO_PUBLIC_API_URL;

const ContractService = {
  
  getFileSystem: async () => {
    try {
      const response = await axios.get(`${url}/archive/directory/getRoot`);
      console.log(JSON.stringify(response))
      return response.data;
      
    } catch (error) {
      console.error('Erro ao carregar o sistema de arquivos:', error);
      throw error;
      
    }
  },

  addFolder: async (parentDirectoryId, folderName) => {
    console.log(parentDirectoryId);
    try {
        const payload = {
            name: folderName,
            parentDirectory: {
            id: parentDirectoryId
            }
        };
        const response = await axios.post(`${url}/archive/directory`, payload);
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar pasta:', error);
        throw error;
    }
},

  deleteFolder: async (folderId) => {
    try {
      const response = await axios.delete(`${url}/archive/directory/${folderId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar pasta:', error);
      throw error;
    }
  }
};

export default ContractService;