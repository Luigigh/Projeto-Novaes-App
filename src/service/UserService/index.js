const usuarios = [
    {
        username: 'Luciano',
        password: '1234',
        hierarchy:'Administrador',
        uriImageProfile: ''
    },
    {
        username: 'Maria',
        password: '1234',
        hierarchy:'Gerente',
        uriImageProfile: ''
    },
    {
        username: 'Lucas',
        password: '1234',
        hierarchy:'Funcionario',
        uriImageProfile: ''
    },
    {
        username: 'Agúas de Araçoiaba',
        password: '1234',
        hierarchy:'Cliente',
        uriImageProfile: ''
    }
];

const usuariosLogados = [

]

export async function serviceLoginMethod(username, password) {
    const user = usuarios.find(user => user.username === username);

    if(user && user.password === password) {
        usuariosLogados.push(user);
        console.log(usuariosLogados);
        return true;
    }

    return false;
}


export default usuariosLogados;