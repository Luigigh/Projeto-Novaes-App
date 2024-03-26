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
          content: []
        },
        {
          name: "Produtos Entregues",
          lastModification: "15/01/2024",
          type: "directory",
          content: [
            {
              name: "doc1.pdf",
              lastModification: "13/03/2024",
              type: "archive"
            },
            {
              name: "doc2.pdf",
              lastModification: "27/01/2024",
              type: "archive"
            },
            {
              name: "pasta3",
              lastModification: "28/12/2023",
              type: "directory",
              content: [
                {
                  name: "doc4.pdf",
                  lastModification: "07/03/2024",
                  type: "archive"
                },
                {
                  name: "doc5.pdf",
                  lastModification: "19/02/2024",
                  type: "archive"
                }
              ]
            }
          ]
        },
        {
          name: "Elaborados pela NOVAES",
          lastModification: "09/03/2024",
          type: "directory",
          content: []
        },
      ]
    }
  ];
  
  export async function AddArchive(archiveName, parentDirectory) {
    await new Promise(res => setTimeout(res, 1000));
  
    const currentDate = new Date();
    const lastModification = currentDate.toLocaleDateString();
  
    const file = {
      name: archiveName,
      lastModification: lastModification,
      type: "archive"
    };
  
    const parent = FileSystem.find(item => item.name === parentDirectory && item.type === "directory");
    if (parent) {
      parent.content.push(file);
      return FileSystem;
    } else {
      throw new Error("Diretório pai não encontrado");
    }
  }
  
  // Adiciona um diretório ao diretório especificado
  export async function AddDirectory(directoryName, parentDirectory) {
    await new Promise(res => setTimeout(res, 1000));
  
    const currentDate = new Date();
    const lastModification = currentDate.toLocaleDateString();

    const directory = {
      name: directoryName,
      lastModification: lastModification,
      type: "directory",
      content: []
    };
  
    const parent = FileSystem.find(item => item.name === parentDirectory && item.type === "directory");
    if (parent) {
      parent.content.push(directory);
      return FileSystem;
    } else {
      throw new Error("Diretório pai não encontrado");
    }
  }
  
  // Remove um arquivo do diretório especificado
  export async function RemoveFile(fileName, parentDirectory) {
    await new Promise(res => setTimeout(res, 1000));
  
    const parent = FileSystem.find(item => item.name === parentDirectory && item.type === "directory");
    if (parent) {
      const index = parent.content.findIndex(item => item.name === fileName && item.type === "archive");
      if (index !== -1) {
        parent.content.splice(index, 1);
        return FileSystem;
      } else {
        throw new Error("Arquivo não encontrado");
      }
    } else {
      throw new Error("Diretório pai não encontrado");
    }
  }
  
  // Remove um diretório do diretório especificado
  export async function RemoveDirectory(directoryName, parentDirectory) {
    await new Promise(res => setTimeout(res, 1000));
  
    console.log("Tentando remover o diretório:", directoryName, "do diretório pai:", parentDirectory);
  
    const parent = FileSystem.find(item => item.name === parentDirectory && item.type === "directory");
    console.log("Diretório pai encontrado:", parent);
  
    if (parent) {
      const index = parent.content.findIndex(item => item.name === directoryName && item.type === "directory");
      console.log("Índice do diretório a ser removido:", index);
  
      if (index !== -1) {
        const removedDirectory = parent.content.splice(index, 1)[0];
        console.log("Diretório removido:", removedDirectory);
        return FileSystem;
      } else {
        throw new Error("Diretório não encontrado");
      }
    } else {
      throw new Error("Diretório pai não encontrado");
    }
  }
  
  // Encontra um diretório com o nome especificado
  export async function FindDirectory(directoryName, currentDirectory = FileSystem) {
    await new Promise(res => setTimeout(res, 1000));
  
    function searchDirectory(directory, name) {
      for (let i = 0; i < directory.length; i++) {
        if (directory[i].type === "directory" && directory[i].content.length > 0) {
          const foundInSubDirectory = searchDirectory(directory[i].content, name);
          if (foundInSubDirectory !== null) {
            return foundInSubDirectory;
          }
        }
        if (directory[i].name === name && directory[i].type === "directory") {
          return directory[i];
        }
      }
      return null;
    }
  
    const foundDirectory = searchDirectory(currentDirectory, directoryName);
    if (foundDirectory) {
      return foundDirectory;
    } else {
      throw new Error("Diretório não encontrado");
    }
  }
  
  export async function ListItemsInDirectory(directoryName, currentDirectory = FileSystem) {
    await new Promise(res => setTimeout(res, 1000));
    const directory = await FindDirectory(directoryName, currentDirectory);
    return directory.content;
  }
  

