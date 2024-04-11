import axios from 'axios';

const ContractService = {
  getFileSystem: async () => {
    try {
      const response = await axios.get('http://192.168.15.36:8080/archive/directory');
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
        const response = await axios.post(`http://192.168.15.36:8080/archive/directory`, payload);
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar pasta:', error);
        throw error;
    }
},

  deleteFolder: async (folderId) => {
    try {
      const response = await axios.delete(`http://192.168.15.36:8080/archive/directory/${folderId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar pasta:', error);
      throw error;
    }
  }
};

export default ContractService;