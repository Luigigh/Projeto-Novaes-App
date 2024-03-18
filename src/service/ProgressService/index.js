let progressList = [];

const ProgressService = {
  addProgress: (titulo, descricao, dataHora) => {
    progressList.push({ titulo, descricao, dataHora });
    return progressList;
  },

  editProgress: (index, novoTitulo, novaDescricao, novaDataHora) => {
    if (index >= 0 && index < progressList.length) {
      progressList[index] = { titulo: novoTitulo, descricao: novaDescricao, dataHora: novaDataHora };
    }
    return progressList;
  },

  deleteProgress: (index) => {
    if (index >= 0 && index < progressList.length) {
      progressList = progressList.filter((_, i) => i !== index);
    }
    return progressList;
  },

  getProgressList: () => {
    return progressList;
  }
};

export default ProgressService;
