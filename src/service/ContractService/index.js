const FileSystem = [
  {
    name: "root",
    lastModification: "13/03/2024",
    type: "directory",
    content: [
      {
        name: "Arquivos Contratuais",
        lastModification: "09/03/2024",
        type: "directory",
        content: [],
      },
      {
        name: "Produtos Entregues",
        lastModification: "15/01/2024",
        type: "directory",
        content: [
          {
            name: "doc1.pdf",
            lastModification: "13/03/2024",
            type: "archive",
          },
          {
            name: "doc2.pdf",
            lastModification: "27/01/2024",
            type: "archive",
          },
          {
            name: "pasta3",
            lastModification: "28/12/2023",
            type: "directory",
            content: [
              {
                name: "doc4.pdf",
                lastModification: "07/03/2024",
                type: "archive",
              },
              {
                name: "doc5.pdf",
                lastModification: "19/02/2024",
                type: "archive",
              },
            ],
          },
        ],
      },
    ],
  },
];

const ContractService = {
  getFileSystem: async function() {
    // Simulando uma requisição assíncrona para obter a estrutura de pastas
    return FileSystem;
  },
  addFolder: async function(folderName) {
    // Simulando uma requisição assíncrona para adicionar uma nova pasta
    const newFolder = {
      name: folderName,
      lastModification: new Date().toLocaleDateString(), // Supondo que a última modificação seja a data atual
      type: "directory",
      content: [],
    };
    FileSystem[0].content.push(newFolder); // Adiciona a nova pasta ao sistema de arquivos
    return newFolder;
  },
  deletarItem: async function(nomeDoItem) {
    // Função para encontrar e deletar o item da lista
    function encontrarEdeletarItem(lista, nome) {
      for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        if (item.name === nome) {
          lista.splice(i, 1);
          return true;
        }
        if (item.type === "directory" && item.content.length > 0) {
          if (encontrarEdeletarItem(item.content, nome)) {
            return true;
          }
        }
      }
      return false;
    }
    
    // Simulação de conexão com o banco de dados para verificar se o item existe
    // Neste exemplo, verificamos apenas se o item existe na lista FileSystem
    const itemExiste = encontrarEdeletarItem(FileSystem, nomeDoItem);
    
    // Se o item não existe, exibir uma mensagem
    if (!itemExiste) {
      console.log("O item '" + nomeDoItem + "' não foi encontrado.");
    }
  }
};

export default ContractService;
