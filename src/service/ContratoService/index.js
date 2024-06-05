import axios from "axios";
const url = process.env.EXPO_PUBLIC_API_URL;

const ContratoService = {
  getAllContratos: async () => {
    try {
      const response = await axios.get(`${url}/contract`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar contratos:", error);
    }
  },

  editContractById: async (contractId, contractData) =>{
    try{
      const response = await axios.put(`${url}/contract/${contractId}`, contractData);
      return response.data;
    }catch(error){
      console.log("Erro ao editar contrato requisição: ", error);
    }
  },

  deleteContractById: async (contractId) => {
    try{
      const response = await axios.delete(`${url}/contract/${contractId}`);
      return response.data;
    }catch(error){
      console.log("Erro ao deletar Contrato Requisição: ", error);
    }
  },

  getStagesByContractId: async (contractId) => {
    try {
      const response = await axios.get(`${url}/stages/byContract/${contractId}`);
      console.log("Etapas: ", response.data);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar estágios do contrato requisicao:", error);
    }
  },

  addContract: async (contractData) => {
    try{
      const response = await axios.post(`${url}/contract`, contractData);
      return response.data;
    }catch(error){
      console.log('Erro ao adicionar contrato requisição: ', error);
      throw error;
    }
  },

  addStage: async (stageData) => {
    try {
      const response = await axios.post(`${url}/stages`, stageData);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar etapa requisição:', error);
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

  updateStageStatus: async (stageId) => {
    try {
      const response = await axios.put(`${url}/stages/alterStatus/${stageId}`);
      console.log("Etapa: ",stageId);
      console.log(JSON.stringify, response);
      if(response){
        console.log("status alterado");
      }
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

export default ContratoService;