import axios from "axios";
const url = process.env.EXPO_PUBLIC_API_URL;

const ProgressServiceClient = {

  getAllContratos: async (client_id) => {
    try {
      const response = await axios.get(`${url}/contract/getByIdClient/${client_id}`);
      console.log("Contratos requisição: ", response.data)
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar contratos:", error);
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
}

export default ProgressServiceClient;