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
            }
        ]
    }
];


export async function AddArchive(archiveName, parentDirectory) {
    await new Promise(res => setTimeout(res, 1000));

    const currentDate = new Date();
    const lastModification = currentDate.toLocaleDateString();

    const parent = FileSystem.find(item => item.name === parentDirectory && item.type === "directory");
    if (parent) {
    parent.content.push({ name: archiveName, lastModification: lastModification, type: "archive" });
    return FileSystem;
    } else {
    throw new Error("Diretório pai não encontrado");
    }
}

export async function AddDirectory(directoryName, parentDirectory) {
    await new Promise(res => setTimeout(res, 1000));

    const currentDate = new Date();
    const lastModification = currentDate.toLocaleDateString();

    const parent = FileSystem.find(item => item.name === parentDirectory && item.type === "directory");
    if (parent) {
    parent.content.push({ name: directoryName, lastModification: lastModification, type: "directory", content: [] });
    return FileSystem;
    } else {
    throw new Error("Diretório pai não encontrado");
    }
}

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

export async function RemoveDirectory(directoryName, parentDirectory) {
    await new Promise(res => setTimeout(res, 1000));

    const parent = FileSystem.find(item => item.name === parentDirectory && item.type === "directory");
    if (parent) {
    const index = parent.content.findIndex(item => item.name === directoryName && item.type === "directory");
    if (index !== -1) {
        const removedDirectory = parent.content.splice(index, 1)[0];
        return FileSystem;
    } else {
        throw new Error("Diretório não encontrado 1");
    }
    } else {
    throw new Error("Diretório pai não encontrado 2");
    }
}

export async function FindDirectory(directoryName, currentDirectory = FileSystem) {
    await new Promise(res => setTimeout(res, 1000));

function searchDirectory(directory, name) {
    console.log("name:"+name);
    console.log(directory);
    for (let i = 0; i < directory.length; i++) {
        console.log(directory[i].name);
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
    console.log(foundDirectory);
    if (foundDirectory) {
        return foundDirectory;
    } else {
        throw new Error("Diretório não encontrado");
    }
}

export async function ListItemsInDirectory(directoryName, currentDirectory = FileSystem) {
    await new Promise(res => setTimeout(res, 1000));
    console.log("Nome do diretorio:" +directoryName);
    const directory = await FindDirectory(directoryName, currentDirectory);
    console.log(directory)
    return directory.content;
}