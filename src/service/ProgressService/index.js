import axios from 'axios';

const apiUrl = 'http://192.168.15.162:8080';

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

  editStage: async (stageId, stageData) => {
    try {
      const response = await axios.put(`${apiUrl}/stages/${stageId}`, stageData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar etapa:', error);
      throw error;
    }
  },

  updateStageStatus: async (stageId, status, stageData) => {
  try {
    const response = await axios.put(`${apiUrl}/stages/${stageId}`, { status, ...stageData });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar status da etapa:', error);
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
};

export default ProgressService;
