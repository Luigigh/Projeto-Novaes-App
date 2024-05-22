import axios from 'axios';
const url = process.env.EXPO_PUBLIC_API_URL;

const ProgressService = {
  getAllStages: async () => {
    try {
      const response = await axios.get(`${url}/stages`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar as etapas:', error);
      throw error;
    }
  },

  addStage: async (stageData) => {
    try {
      const response = await axios.post(`${url}/stages`, stageData);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar etapa:', error);
      throw error;
    }
  },

  editStage: async (stageId, stageData) => {
    try {
      const response = await axios.put(`${url}/stages/${stageId}`, stageData);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar etapa:', error);
      throw error;
    }
  },

  updateStageStatus: async (stageId, status, stageData) => {
  try {
    const response = await axios.put(`${url}/stages/${stageId}`, { status, ...stageData });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar status da etapa requisição:', error);
    throw error;
  }
},
  
  deleteStage: async (stageId) => {
    try {
      const response = await axios.delete(`${url}/stages/${stageId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar etapa:', error);
      throw error;
    }
  },
};

export default ProgressService;
