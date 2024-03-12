const FileSystem = [
{
    name: "Arquivos_Contratuais",
    lastModification: "09/03/2024",
    type: "directory",
    content: []
},
{
    name: "Produtos_Entregues",
    lastModification: "15/01/2024",
    type: "directory",
    content: [
        {
            name: "doc1.pdf",
            lastModification: "data1",
            type: "archive"
        },
        {
            name: "doc2.pdf",
            lastModification: "data2",
            type: "archive"
        },
        {
            name: "pasta3",
            lastModification: "data3",
            type: "directory",
            content: [
                {
                    name: "doc4.pdf",
                    lastModification: "data4",
                    type: "archive"
                },
                {
                    name: "doc5.pdf",
                    lastModification: "data5",
                    type: "archive"
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
        throw new Error("Diretório não encontrado");
    }
} else {
    throw new Error("Diretório pai não encontrado");
}
}

export async function ListItemsInDirectory(directoryName) {
await new Promise(res => setTimeout(res, 1000));

const directory = FileSystem.find(item => item.name === directoryName && item.type === "directory");
if (directory) {
    return directory.content.filter(item => item.type === "archive" || item.type === "directory");
} else {
    throw new Error("Diretório não encontrado");
}
}

