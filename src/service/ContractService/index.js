// ContractService

import axios from 'axios';
const url = process.env.EXPO_PUBLIC_API_URL;

const fetchDirectories = async () => {
  try {
    const response = await axios.get(`${url}/archive/directory`);
    if (response.data && response.data.length > 0) {
      return response.data;
    } else {
      console.log('Nenhuma pasta encontrada na resposta da API.');
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar diretórios:', error);
    return [];
  }
};

export default { fetchDirectories };
