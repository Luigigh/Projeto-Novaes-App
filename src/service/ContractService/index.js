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

class ContractService {
  static async getFileSystem() {
    // Simulando uma requisição assíncrona para obter a estrutura de pastas
    return FileSystem;
  }

  static async addFolder(folderName) {
    // Simulando uma requisição assíncrona para adicionar uma nova pasta
    const newFolder = {
      name: folderName,
      lastModification: new Date().toLocaleDateString(), // Supondo que a última modificação seja a data atual
      type: "directory",
      content: [],
    };
    FileSystem[0].content.push(newFolder); // Adiciona a nova pasta ao sistema de arquivos
    return newFolder;
  }

  static async deleteFolder(folderName) {
    // Encontre a pasta com o nome especificado e remova-a do sistema de arquivos
    const removeFolder = (folders) => {
      for (let i = 0; i < folders.length; i++) {
        if (folders[i].name === folderName) {
          folders.splice(i, 1);
          return true;
        }
        if (folders[i].type === "directory") {
          if (removeFolder(folders[i].content)) {
            return true;
          }
        }
      }
      return false;
    };

    removeFolder(FileSystem[0].content);
  }
}

export default ContractService;


