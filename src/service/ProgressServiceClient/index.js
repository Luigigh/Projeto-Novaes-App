import axios from "axios";

const apiUrl = 'http://192.168.15.162:8080';

const ProgressServiceClient = {

  getAll: async () => {
   try{
    const response  = await axios.get(`${apiUrl}/stages`);
    return response.data;
   }catch(error){
    console.log("Erro de conexão com servidor: ", error);
    throw error;
   }  
  }
}

export default ProgressServiceClient;