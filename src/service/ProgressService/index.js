// service/ProgressService/index.js

import axios from 'axios';

const apiUrl = 'http://192.168.15.36:8080'; // URL base da sua API

const ProgressService = {
  async getAllStages() {
    try {
      const response = await axios.get(`${apiUrl}/stages`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar as etapas:', error);
      throw error;
    }
  },

  async addStage(stageData) {
    console.log("Dados recebidos em addStage:", stageData); // Adicione este log

    try {
      const response = await axios.post(`${apiUrl}/stages`, stageData);
      console.log("Resposta da API em addStage:", response.data); // Adicione este log
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar uma etapa:', error);
      throw error;
    }
  },

  async editStage(stageId, updatedStageData) {
    try {
      const response = await axios.put(`${apiUrl}/stages/${stageId}`, updatedStageData);
      return response.data;
    } catch (error) {
      console.error('Erro ao editar uma etapa:', error);
      throw error;
    }
  },

  async deleteStage(stageId) {
    try {
      const response = await axios.delete(`${apiUrl}/stages/${stageId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar uma etapa:', error);
      throw error;
    }
  }
};

export default ProgressService;
