import axios from "axios";
const url = process.env.EXPO_PUBLIC_API_URL;

export async function serviceLoginMethod(username, password) {
  try {
    const response = await axios.post(
      url + "/auth/login",
      `login=${username}&password=${password}&remember-me=`,
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    if (response.status === 200) {
      console.log("response: ", response.data);
      //const res = await axios.get(`${url}+user/${response.data}`);
      
      return true;
    } else {
      console.log("response: ", response);
    }
  } catch (error) {
    console.log("error: ", error);
  }

  return false;
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
        return true;
      }else{
        return false;
      }
      
    } catch ( error ){
      console.log(error)
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

export async function crateEmployeeMethod(employee) {
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

export async function getAllUsers() {
  try {
    const response = await axios.get(`${url}/client`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
