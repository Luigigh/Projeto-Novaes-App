// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
// import { useRoute } from "@react-navigation/native";
// import DocumentPicker from "@react-native-document-picker";
// import styles from "./Styles";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import FolderItem from "../../../components/FolderItem";
// import FileItem from "../../../components/FileItem";
// import { ListItemsInDirectory, AddArchive, AddDirectory, RemoveFile, RemoveDirectory } from "../../../service/ContractService";
// import Icon_beck from "react-native-vector-icons/AntDesign";
// import Icon_folder from "react-native-vector-icons/Entypo";

// export default function ContractList() {
//   const [listArchive, setListArchive] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const route = useRoute();

//   async function atualizarListaDiretorios(nomeDirectory, parentDirectory) {
//     setIsLoading(true);
//     try {
//       const list = await ListItemsInDirectory(nomeDirectory, parentDirectory);
//       setListArchive(list);
//     } catch (error) {
//       console.error("Erro ao buscar lista de arquivos:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   const handleDeleteDirectory = async (directoryName) => {
//     try {
//       await RemoveDirectory(directoryName);
//       await atualizarListaDiretorios("root");
//     } catch (error) {
//       console.error("Erro ao deletar diretório:", error);
//     }
//   };

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         await atualizarListaDiretorios("root");
//       } catch (error) {
//         console.error("Erro ao buscar lista de arquivos:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   const handleAddArchive = async () => {
//     try {
//       const res = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       await AddArchive(res.name, "root");
//       await atualizarListaDiretorios("root");
//     } catch (error) {
//       console.error("Erro ao adicionar arquivo:", error);
//     }
//   };

//   const renderListItems = () => {
//     if (listArchive.length === 0) {
//       return (
//         <View style={styles.emptyContainer}>
//           <Icon_folder name="folder" size={90} color="#ccc" />
//           <Text style={styles.emptyText}>Este diretório está vazio.</Text>
//         </View>
//       );
//     } else {
//       return listArchive.map((item, index) => {
//         const key = `item_${index}`;
//         const lastModification = item.lastModification;
//         const isFile = item.type === "archive";

//         if (isFile) {
//           const fileName = item.name.split(".").shift();
//           const extensionFile = item.name.split(".").pop();
//           return (
//             <FileItem
//               key={key}
//               fileName={fileName}
//               lastModification={lastModification}
//               extensionFile={extensionFile}
//             />
//           );
//         } else {
//           return (
//             <TouchableOpacity
//               key={key}
//               onPress={() => atualizarListaDiretorios(item.name, "root")}
//             >
//               <FolderItem
//                 nameFolder={item.name}
//                 lastModification={lastModification}
//                 onDelete={() => handleDeleteDirectory(item.name)}
//               />
//             </TouchableOpacity>
//           );
//         }
//       });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Header />
//         <View style={styles.caminhoContainer}>
//           <Text style={styles.title}>Arquivos Disponíveis</Text>
//           <TouchableOpacity
//             style={styles.iconContainer}
//             onPress={() => {
//               atualizarListaDiretorios("root");
//             }}
//           >
//             <Icon_beck name="back" size={30} color={"#000"} />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.main}>
//         {isLoading ? (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#0000ff" />
//           </View>
//         ) : (
//           <View style={styles.list}>
//             {renderListItems()}
//             <TouchableOpacity onPress={handleAddArchive}>
//               <Text style={styles.addButton}>Adicionar Arquivo</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//       <Footer routeSelected={route.name} />
//     </View>
//   );
// }