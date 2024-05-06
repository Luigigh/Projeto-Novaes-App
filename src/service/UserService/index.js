import axios from "axios";
const url = process.env.EXPO_PUBLIC_API_URL;

export const usuarios = [
  {
    username: "Luciano",
    password: "1234",
    hierarchy: "Administrador",
    uriImageProfile: "",
  },
  {
    username: "Maria",
    password: "1234",
    hierarchy: "Gerente",
    uriImageProfile: "",
  },
  {
    username: "Lucas",
    password: "1234",
    hierarchy: "Funcionario",
    uriImageProfile: "",
  },
  {
    username: "Águas de Araçoiaba",
    password: "1234",
    hierarchy: "Cliente",
    uriImageProfile: "",
  },
];

export async function serviceLoginMethod(username, password) {
  try {
    const response = await axios.post(
      url + "/auth/login",
      `login=${username}&password=${password}`,
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
