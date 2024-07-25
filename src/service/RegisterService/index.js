import axios from "axios";
const url = process.env.EXPO_PUBLIC_API_URL;

const RegisterService = {

  createFuncionario: async (userData) => {
    try {
      console.log(JSON.stringify(userData))
      const response = await axios.post(`${url}/employee`, userData);
      return response.data;
    } catch (error) {
      if (error === 400){
        Alert.alert(
          "Erro ao cadastrar!",
          `O email já está cadastrado.`,
          [
            {
              text: "Fechar",
              style: "cancel",
            },
          ]
        )
      }
      console.error("Erro ao adicionar funcionário:", error);
      throw error;
    }
  },

  createCliente: async (userData) => {
    try {
      console.log(JSON.stringify(userData));
      const response = await axios.post(`${url}/client`, userData);
      
      return response.data;
    } catch (error) {
      if (error === 400){
        Alert.alert(
          "Erro ao cadastrar!",
          `O email já está cadastrado.`,
          [
            {
              text: "Fechar",
              style: "cancel",
            },
          ]
        )
      }
      console.error("Erro ao adicionar cliente:", error);
      throw error;
    }
  }

};

export default RegisterService;