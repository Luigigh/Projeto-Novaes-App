import axios from 'axios';

const apiUrl = 'http://192.168.15.36:8080'; // Substitua pelo URL base da sua API

const ProgressService = {
  getAllStages: async () => {
    try {
      const response = await axios.get(`${apiUrl}/stages`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar as etapas:', error);
      throw error;
    }
  },

  addStage: async (stageData) => {
    try {
      const response = await axios.post(`${apiUrl}/stages`, stageData);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar etapa:', error);
      throw error;
    }
  },

  deleteStage: async (stageId) => {
    try {
      const response = await axios.delete(`${apiUrl}/stages/${stageId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar etapa:', error);
      throw error;
    }
  },

  // Adicione outras funções necessárias para editar ou realizar outras operações relacionadas às etapas
};

export default ProgressService;
