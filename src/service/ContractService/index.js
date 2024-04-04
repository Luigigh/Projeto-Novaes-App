import axios from 'axios';

const ContractService = {
  getFileSystem: async () => {
    try {
      const response = await axios.get('http://192.168.0.24:8080/archive/directory');
      return response.data;
    } catch (error) {
      console.error('Erro ao carregar o sistema de arquivos:', error);
      throw error;
    }
  },

  addFolder: async (folderName) => {
    try {
      const response = await axios.post('http://192.168.0.24:8080/archive/directory', { name: folderName });
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar pasta:', error);
      throw error;
    }
  },

  deleteFolder: async (folderId) => {
    try {
      const response = await axios.delete(`http://192.168.0.24:8080/archive/directory/${folderId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar pasta:', error);
      throw error;
    }
  }
};

export default ContractService;
