import axios from "axios";
import { Platform } from "react-native";
import { Alert } from "react-native";

const url = process.env.EXPO_PUBLIC_API_URL;

export const userLogged = [];

export const pathUser = [];

export async function serviceLoginMethod(username, password) {
  try {
    const  response = await axios.post(
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
    console.log("error em login: ", error);
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

  if (user.role === "EMPLOYEE" || user.role === "ADMIN") {
    const employeeDetails = await getEmployeeDetails(user.id);
    userLogged[0].office = employeeDetails.office;
  } else if (user.role === "USER") {
    const clientDetails = await getClientDetails(user.id);
    console.log(JSON.stringify(clientDetails))
    userLogged[0].entrerprise_name = clientDetails.entrerprise_name;
    userLogged[0].references_directory = clientDetails.references_directory;
  }

  if(user.role === "ADMIN"){
    pathUser[0]= "ContractList";
    pathUser[1]= "InfoManagerEmployer";
    pathUser[2]= "ClientList";
    pathUser[3]= "ListContractEmployee";
  }
  else{
    pathUser[0]= "DirectoryClient";
    pathUser[1]= "InfoManager";
    pathUser[2]= "EmployeeList";
    pathUser[3]= "ProgressClient";
  }
}

async function clearUserLogged(){
  userLogged[0] = {};
}


export async function serviceLogoutMethod(){
  try{
    const response = await axios.post(`${url}/auth/logout`);
    if(response.status == 204){
      clearUserLogged();
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

export async function editClient(idUser, data){
  console.log("id usuario: "+idUser);
  console.log("Data em userService: " + JSON.stringify(data))
  try {
    const response = await axios.put(`${url}/client/${idUser}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("Resposta:", response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar o cliente', error)
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
    const response = await axios.get(`${url}/employee/getAllContacts`);
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