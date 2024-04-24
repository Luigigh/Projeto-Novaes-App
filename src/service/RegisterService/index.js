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

  createFuncionario: async (userId, cargo) => {
    try {
      const response = await axios.post(`${url}/employee`, { id: userId, office: cargo });
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar funcionário:", error);
      throw error;
    }
  },

  createCliente: async (userId, nomeDaEmpresa) => {
    try {
      const response = await axios.post(`${url}/client`, { id: userId, enterprise_name: nomeDaEmpresa });
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar cliente:", error);
      throw error;
    }
  }

};

export default RegisterService;
