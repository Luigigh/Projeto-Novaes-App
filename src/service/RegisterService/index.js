import axios from "axios";
const url = process.env.EXPO_PUBLIC_API_URL;

const RegisterService = {
  createUsuario: async (userData) => {
    try {
      const response = await axios.post(`${url}/users`, userData); 
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      throw error;
    }
  },

  createFuncionario: async (userData) => {
    try {
      const response = await axios.post(`${url}/employee`, userData);
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar funcionário:", error);
      throw error;
    }
  },

  createCliente: async (userData) => {
    try {
      const response = await axios.post(`${url}/client`, userData);
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar cliente:", error);
      throw error;
    }
  }

};

export default RegisterService;