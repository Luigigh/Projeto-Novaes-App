export const usuarios = [
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
        username: 'Águas de Araçoiaba',
        password: '1234',
        hierarchy:'Cliente',
        uriImageProfile: ''
    }
];

export async function serviceLoginMethod(username, password) {
    const user = usuarios.find(user => user.username === username);
    

    if(user && user.password === password) {
        console.log("usuario que logou: " + user.hierarchy);

        if(user.hierarchy === 'Funcionario' || user.hierarchy === 'Gerente' || user.hierarchy === 'Administrador'){
            
            return 'Employee';
        }
        if(user.hierarchy === 'Cliente'){
            return 'Client';
        }
        
    }
}

