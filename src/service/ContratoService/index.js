import axios from "axios";
const url = process.env.EXPO_PUBLIC_API_URL;

export default fetchContracts = async () => {
  try {
    const response = await axios.get(`${url}/contract`);
    if (response.data) {
      return response.data;
    } else {
      console.log("Nenhum contrato encontrado na resposta da API.");
      return [];
    }
  } catch (error) {
    console.error("Erro ao buscar contratos:", error);
    return [];
  }
};
