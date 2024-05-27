import axios from "axios";
import { Platform } from "react-native";
const url = process.env.EXPO_PUBLIC_API_URL;

export const userLogged = [];

export async function serviceLoginMethod(username, password) {
  try {
    const response = await axios.post(
      `${url}/auth/login`,
      `login=${username}&password=${password}&remember-me=`,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    if (response.status === 200) {
      console.log("response: ", response.data);
        const user = await findUserById(response.data);
        await setUserLogged(user);
      return true;
    } else {
      console.log("response: ", response);
      return false;
    }
  } catch (error) {
    console.log("error: ", error);
  }

  return null;
}


async function setUserLogged(user) {
  userLogged[0]={
    id: user.id,
    nameUser: user.name,
    lastname: user.lastname,
    login: user.login,
    role: user.role,
  };

  
}


export async function serviceLogoutMethod(){
  try{
    const response = await axios.post(`${url}/auth/logout`);
    if(response.status == 204){
      return true;
    }
    else{
      return false;
    }
  } catch ( error ){
    throw error;
  } 
}

export async function verifyUserAuth(){
    try{
      console.log("Função chamada")
      const response = await axios.get(`${url}/user/auth`);
      console.log("teste")
      if(response.status == 204){
        const user = await axios.get(`${url}/user/currentUser`);
        await setUserLogged(user.data);
        return true;
      }else{
        return false;

      }
      
    } catch ( error ){
      console.log(error)
    }
}

export async function findUserById(user_id){
  try{
    const response = await axios.get(`${url}/user/${user_id}`);
    if(response.status == 200){
      return response.data;
    }else{
      console.log(response)
    }
  } catch ( error ){
    console.log(error)
  }
}

export async function getClientDetails(id) {
  try {
    const response = await axios.get(`${url}/client/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getEmployeeDetails(id) {
  try {
    const response = await axios.get(`${url}/employee/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createClientMehtod(client) {
  let bodyContent = JSON.stringify({
    namne: client.name,
    lastname: client.lastname,
    login: client.login,
    password: client.password,
    enterprise_name: client.enterprise_name,
  });

  let reqOptions = {
    url: `${url}/client`,
    method: "POST",
    data: bodyContent,
  };

  let response = await axios.request(reqOptions);
  console.log(response.data);
}

export async function createEmployeeMethod(employee) {
  let bodyContent = JSON.stringify({
    namne: employee.name,
    lastname: employee.lastname,
    login: employee.login,
    password: employee.password,
    office: employee.office,
    admin: employee.isAdmin,
  });
  console.log(JSON.stringify(bodyContent));
  let reqOptions = {
    url: `${url}/employee`,
    method: "POST",
    data: bodyContent,
  };

  let response = await axios.request(reqOptions);
  console.log(response.data);
}

export async function deleteClient(id) {
  try {
    const response = await axios.delete(`${url}/client/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao deletar cliente:", error);
    throw error;
  }
}

export async function getAllClients() {
  try {
    const response = await axios.get(`${url}/client`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getAllEmployee() {
  try {
    const response = await axios.get(`${url}/employee`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getProfilePhotoUser(id_user) {
  try {
    const response = await axios.get(`${url}/employee/getProfilePhoto/${id_user}`);
    return response.data.base64Image;
  } catch (error) {
    console.log("erro: " + error);
  }
}

export async function addNewProfilePhoto(imageUser, id_user) {
  try {
    const formdata = new FormData();
    formdata.append("profilePhoto", {
      uri: Platform.OS === 'ios' ? imageUser.uri.replace('file://', '') : imageUser.uri,
      name: 'ProfileImageUser.jpeg',
      type: 'image/jpeg',
    });

    const reqOptions = {
      url: `${url}/employee/addProfilePhoto/${id_user}`,
      method: "PUT",
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formdata,
    };

    const response = await axios(reqOptions);
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(`error: ${error}`);
    return false;
  }
}
